'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { getCustomerShopGetEnabledGoodsList } from '@/service/api/customerApiShop';
import { useSuspenseQuery } from '@tanstack/react-query';
import Image from 'next/image';

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
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {data?.map((item: any) => (
        <Card className="overflow-hidden" key={item.id}>
          {item.cover_image && (
            <Image
              src={item.cover_image}
              alt={item.subject}
              width={334}
              height={192}
              className="h-48 w-full rounded-t-lg"
            />
          )}
          <CardHeader className="flex flex-row items-start bg-muted/50">
            <div className="grid gap-0.5">
              <CardTitle className="group flex items-center gap-2 text-lg">
                <span>{item.subject}</span>
              </CardTitle>
              <CardDescription>
                <span>{item.description}</span>
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent className="p-6 text-sm">
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
                  <span className="text-muted-foreground">同时连接 IP 数</span>
                  <span>{item.node_connector}</span>
                </li>
              </ul>
              <Separator className="my-2" />
              <div className="font-semibold">商品描述</div>
              <ul className="grid gap-3">
                {item.descriptions.map((description: string, index: number) => (
                  <li className="flex items-center justify-between" key={index}>
                    <span className="text-muted-foreground">{description}</span>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
          <CardFooter className="p-0">
            <Button className="size-full">购买</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
