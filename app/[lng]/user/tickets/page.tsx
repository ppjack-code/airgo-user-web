'use client';

import InfiniteScroll from '@/components/infinite-scroll';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer';
import { Skeleton } from '@/components/ui/skeleton';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';
import {
  postCustomerTicketFirstTicket,
  postCustomerTicketGetUserTicketList,
} from '@/service/api/customerApiTicket';
import { useQuery, useSuspenseInfiniteQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import { MessageSquareX, MessagesSquare, X } from 'lucide-react';
import { Fragment, useState } from 'react';

export default function Tickets() {
  const { data, fetchNextPage, hasNextPage, isFetching } =
    useSuspenseInfiniteQuery({
      queryKey: ['postCustomerTicketGetUserTicketList', 'ticket'],
      initialPageParam: 1,
      queryFn: async ({ pageParam }) => {
        const res = await postCustomerTicketGetUserTicketList({
          table_name: 'ticket',
          field_params_list: [
            {
              field: 'id',
              field_type: '',
              condition: '<>',
              condition_value: '',
              operator: '',
            },
          ],
          pagination: {
            page_num: pageParam || 1,
            page_size: 30,
            order_by: 'id DESC',
          },
        });
        return res.data?.data || {};
      },
      getNextPageParam: (lastPage, allPages, lastPageParam, allPageParams) => {
        if (lastPageParam * 10 >= lastPage.total) return undefined;
        return lastPageParam + 1;
      },
    });
  const dataSource =
    data?.pages.flatMap((page) => page?.data!).filter((item) => item) || [];

  const [ticket, setTicket] = useState({} as any);
  const Ticket = useQuery({
    enabled: !!ticket?.id,
    queryKey: ['postCustomerTicketFirstTicket', ticket?.id],
    queryFn: async () => {
      const res = await postCustomerTicketFirstTicket(ticket);
      return res.data?.data || {};
    },
  });
  return (
    <Fragment>
      <InfiniteScroll
        dataSource={dataSource}
        hasMore={hasNextPage}
        loadMore={fetchNextPage}
        loading={isFetching}
        className="flex flex-col gap-4"
        renderItem={(item) => (
          <Card key={item.id} className="overflow-hidden">
            <CardHeader
              className={cn(
                'flex flex-col items-start justify-between bg-muted/50 px-6 py-3 md:flex-row md:items-center',
                {
                  'bg-green-500/20': item.status === 'TICKET_PROCESSING',
                },
              )}
            >
              <CardTitle>{item.title}</CardTitle>
              <CardDescription className="text-xs text-muted-foreground">
                创建时间{' '}
                <time dateTime={item.created_at}>
                  {format(new Date(item.created_at), 'yyyy-MM-dd HH:mm:ss')}
                </time>
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6 text-sm">{item.details}</CardContent>
            <CardFooter className="flex flex-row items-center justify-between border-t bg-muted/50 px-6 py-3">
              <span className="text-xs text-muted-foreground">
                更新时间{' '}
                <time dateTime={item.updated_at}>
                  {format(new Date(item.updated_at), 'yyyy-MM-dd HH:mm:ss')}
                </time>
              </span>
              {item.status === 'TICKET_PROCESSING' && (
                <div className="flex gap-2">
                  <Button size="sm" variant="destructive">
                    <MessageSquareX className="mr-2 size-5" /> 关闭工单
                  </Button>
                  <Button
                    size="sm"
                    onClick={() => {
                      setTicket(item);
                    }}
                  >
                    <MessagesSquare className="mr-2 size-5" /> 联系客服
                  </Button>
                </div>
              )}
              {item.status === 'TICKET_CLOSED' && (
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="ghost"
                    className="text-muted-foreground"
                  >
                    已结束
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => {
                      setTicket(item);
                    }}
                  >
                    <MessagesSquare className="mr-2 size-5" /> 查看工单
                  </Button>
                </div>
              )}
            </CardFooter>
          </Card>
        )}
        renderSkeleton={() =>
          Array.from({ length: 5 }).map((_, index) => (
            <Skeleton key={index} className="h-48 w-full rounded-xl" />
          ))
        }
      />
      <Drawer
        open={!!ticket?.id}
        onOpenChange={(open) => {
          if (!open) setTicket(null);
        }}
      >
        <DrawerContent className="container h-screen">
          <DrawerHeader className="border-b">
            <DrawerTitle>{Ticket.data?.title || ticket?.title}</DrawerTitle>
            <DrawerDescription>
              {Ticket.data?.details || ticket?.details}
            </DrawerDescription>
            <DrawerClose className="absolute right-4 top-4">
              <X />
            </DrawerClose>
          </DrawerHeader>
          <div className="flex-auto p-4">
            {Ticket.data?.ticket_message?.map((item: any) => {
              return (
                <div
                  key={item.id}
                  className={cn('flex items-center gap-4', {
                    'flex-row-reverse': !item.is_admin,
                  })}
                >
                  <Avatar className="size-14">
                    <AvatarFallback
                      className={cn('bg-green-500 text-primary-foreground', {
                        'bg-primary': !item.is_admin,
                      })}
                    >
                      {item.is_admin ? 'A' : 'U'}
                    </AvatarFallback>
                  </Avatar>
                  <div
                    className={cn('flex flex-col gap-1', {
                      'items-end': !item.is_admin,
                    })}
                  >
                    <p className="text-sm text-muted-foreground">
                      {format(new Date(item.created_at), 'yyyy-MM-dd HH:mm:ss')}
                    </p>
                    <p
                      className={cn(
                        'font-medium bg-accent rounded-lg p-2 w-fit',
                        {
                          'bg-primary text-primary-foreground': !item.is_admin,
                        },
                      )}
                    >
                      {item.message}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          {ticket?.status === 'TICKET_PROCESSING' && (
            <DrawerFooter>
              <Textarea
                className="resize-none"
                placeholder="请在此输入您的问题，我们会尽快回复您。"
              />
              <Button>发送信息</Button>
            </DrawerFooter>
          )}
        </DrawerContent>
      </Drawer>
    </Fragment>
  );
}
