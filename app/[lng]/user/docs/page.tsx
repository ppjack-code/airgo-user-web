'use client';

import Empty from '@/components/empty';
import InfiniteScroll from '@/components/infinite-scroll';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import { postCustomerArticleGetArticleList } from '@/service/api/customerApiArticle';
import { useConfig } from '@/stores/config';
import { useSuspenseInfiniteQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import { ChevronLeft } from 'lucide-react';
import { Fragment, useState } from 'react';
import Markdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {
  oneDark,
  oneLight,
} from 'react-syntax-highlighter/dist/esm/styles/prism';
import remarkGfm from 'remark-gfm';

export default function Docs() {
  const { mode } = useConfig();
  const { data, fetchNextPage, hasNextPage, isFetching } =
    useSuspenseInfiniteQuery({
      queryKey: ['postCustomerArticleGetArticleList', 'article'],
      initialPageParam: 1,
      queryFn: async ({ pageParam }) => {
        const res = await postCustomerArticleGetArticleList({
          table_name: 'article',
          pagination: {
            page_size: 10,
            page_num: pageParam || 1,
            order_by: '',
          },
          field_params_list: [
            {
              field: 'status',
              field_type: '',
              condition: '=',
              condition_value: '1',
              operator: '',
            },
            {
              field: 'type',
              field_type: '',
              condition: '=',
              condition_value: 'notice',
              operator: 'AND',
            },
          ],
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
  const [article, setArticle] = useState<any>();

  if (!dataSource.length) return <Empty />;

  return (
    <Fragment>
      {article && (
        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <Button
                variant="outline"
                onClick={() => {
                  setArticle(undefined);
                }}
              >
                <ChevronLeft className="size-4" />
                返回
              </Button>
              <CardTitle className="font-medium">{article.title}</CardTitle>
              <CardDescription>
                {format(article.created_at, 'yyyy-MM-dd HH:mm:ss')}
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <Markdown
              className="prose max-w-none dark:prose-invert"
              remarkPlugins={[remarkGfm]}
              components={{
                code(props) {
                  const { children, className, node, ref, ...rest } = props;
                  const match = /language-(\w+)/.exec(className || '');
                  return (
                    <ScrollArea className="w-full">
                      <SyntaxHighlighter
                        {...rest}
                        language={match?.[1] || 'bash'}
                        style={mode === 'dark' ? oneDark : oneLight}
                      >
                        {String(children).replace(/\n$/, '')}
                      </SyntaxHighlighter>
                      <ScrollBar orientation="horizontal" />
                    </ScrollArea>
                  );
                },
              }}
            >
              {article.content}
            </Markdown>
          </CardContent>
        </Card>
      )}
      <InfiniteScroll
        dataSource={dataSource}
        hasMore={hasNextPage}
        loadMore={fetchNextPage}
        loading={isFetching}
        className={cn('grid md:grid-cols-2 lg:grid-cols-3 gap-4', {
          hidden: !!article,
        })}
        renderItem={(item) => (
          <Card
            key={item.id}
            className="cursor-pointer hover:bg-accent"
            onClick={() => {
              setArticle(item);
            }}
          >
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.introduction}</CardDescription>
              <CardDescription>
                更新时间: {format(item.updated_at, 'yyyy-MM-dd HH:mm:ss')}
              </CardDescription>
            </CardHeader>
          </Card>
        )}
      />
    </Fragment>
  );
}
