'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import { getCustomerShopGetEnabledGoodsList } from '@/service/api/customerApiShop';
import { useSuspenseQuery } from '@tanstack/react-query';
import { Ban, CircleCheck } from 'lucide-react';
import { useState } from 'react';

export default function Store() {
  const { data } = useSuspenseQuery({
    queryKey: ['getCustomerShopGetEnabledGoodsList', 'goods_type'],
    queryFn: async () => {
      const result = await getCustomerShopGetEnabledGoodsList({
        goods_type: 'subscribe',
      });
      const data =
        result.data?.data.map((item: any) => ({
          ...item,
          node_speed_limit: item.node_speed_limit / 1024 / 1024,
          total_bandwidth: item.total_bandwidth / 1024 / 1024 / 1024,
          description: item.des.split('\n')[0],
          descriptions: item.des
            .split('\n')
            .slice(1)
            .filter(Boolean)
            .map((des: string) => des.trim()),
        })) || [];

      return data;
    },
  });
  const [type, setType] = useState('month');

  function getTabContent(type: string) {
    return (
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {data?.map((item: any) => {
          let price = item.price;
          let unit = '月';
          switch (type) {
            case 'month':
              break;
            case 'quarter':
              price = (price * 3 * 0.9).toFixed(2);
              unit = '季';
              break;
            case 'year':
              price = (item.price * 12 * 0.7).toFixed(2);
              unit = '年';
              break;
          }
          return (
            <Card className="overflow-hidden" key={item.id}>
              <CardHeader className="gap-2">
                <h1 className="text-xl font-medium capitalize lg:text-2xl">
                  {item.subject}
                </h1>
                <p className="text-muted-foreground">{item.description}</p>
                <h2 className="text-2xl font-semibold sm:text-3xl">
                  ¥ {price}{' '}
                  <span className="text-base font-medium">/ {unit}</span>
                </h2>
                <Button className="size-full">购买</Button>
              </CardHeader>
              <Separator />
              <CardContent className="py-4 text-sm">
                <div className="grid gap-3">
                  <div className="font-semibold">商品详情</div>
                  <ul className="grid gap-3">
                    <li className="flex items-center justify-between">
                      <span className="text-muted-foreground">可用流量</span>
                      <span>{item.total_bandwidth} GB</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-muted-foreground">连接速度</span>
                      <span>
                        {item.node_speed_limit === 0
                          ? '无限制'
                          : `${item.node_speed_limit} Mbps`}
                      </span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-muted-foreground">
                        同时连接 IP 数
                      </span>
                      <span>{item.node_connector}</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
              <Separator />
              <CardContent className="py-4 text-sm">
                <ul className="grid gap-3">
                  {item.descriptions.map(
                    (description: string, index: number) => {
                      const icon = description.includes('[x]') ? (
                        <CircleCheck className="size-4 text-green-500" />
                      ) : (
                        <Ban className="size-4 text-red-500" />
                      );
                      const text = description.replace(/\[x\]|\[\]/g, '');
                      return (
                        <li className="flex items-center gap-2" key={index}>
                          {icon}
                          <span className="text-muted-foreground">{text}</span>
                        </li>
                      );
                    },
                  )}
                </ul>
              </CardContent>
            </Card>
          );
        })}
      </div>
    );
  }
  return (
    <Tabs defaultValue="month" value={type} onValueChange={setType}>
      <TabsList className="mb-8 flex h-auto w-full flex-wrap *:flex-1">
        <TabsTrigger value="month">月付</TabsTrigger>
        <TabsTrigger value="quarter" className="relative">
          季付{' '}
          <Badge
            variant={type === 'quarter' ? 'default' : 'secondary'}
            className={cn('absolute top-full mt-2', {
              'text-muted-foreground': type !== 'quarter',
            })}
          >
            优惠 10%
          </Badge>
        </TabsTrigger>
        <TabsTrigger value="year" className="relative">
          年付{' '}
          <Badge
            variant={type === 'year' ? 'default' : 'secondary'}
            className={cn('absolute top-full mt-2', {
              'text-muted-foreground': type !== 'year',
            })}
          >
            优惠 30%
          </Badge>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="month">{getTabContent('month')}</TabsContent>
      <TabsContent value="quarter">{getTabContent('quarter')}</TabsContent>
      <TabsContent value="year">{getTabContent('year')}</TabsContent>
    </Tabs>
  );
}
