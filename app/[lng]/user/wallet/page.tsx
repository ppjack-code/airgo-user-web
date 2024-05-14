'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { useUserInfo } from '@/stores/userInfo';
import { Copy, CreditCard, Landmark, Users } from 'lucide-react';
import { toast } from 'sonner';

export default function Wallet() {
  const { userInfo } = useUserInfo();
  return (
    <div className="flex gap-6 align-top">
      <div className="min-h-[calc(100vh-64px-302px-32px)] w-full flex-auto gap-6 overflow-hidden">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2"></CardHeader>
          <CardContent className="text-2xl font-bold">
            <Tabs defaultValue="balance">
              <TabsList className="flex h-auto w-full flex-wrap *:flex-1">
                <TabsTrigger value="balance">余额</TabsTrigger>
                <TabsTrigger value="commission">佣金</TabsTrigger>
                <TabsTrigger value="invitation">邀请用户</TabsTrigger>
              </TabsList>
              <TabsContent value="balance">余额明细列表</TabsContent>
              <TabsContent value="commission">佣金明细列表</TabsContent>
              <TabsContent value="commission">邀请明细列表</TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
      <div className="sticky top-0 hidden h-96 w-52 shrink-0 flex-col gap-2 md:flex lg:flex">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">账户余额</CardTitle>
            <CreditCard className="text-muted-foreground size-5" />
          </CardHeader>
          <CardContent className="text-2xl font-bold">
            {userInfo?.balance.toFixed(2)}
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">邀请人数</CardTitle>
            <Users className="text-muted-foreground size-5" />
          </CardHeader>
          <CardContent className="text-2xl font-bold">
            {userInfo?.balance.toFixed(2)}
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">邀请总收益</CardTitle>
            <Landmark className="text-muted-foreground size-5" />
          </CardHeader>
          <CardContent className="text-2xl font-bold">
            {userInfo?.balance.toFixed(2)}
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">邀请码</CardTitle>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    className="size-5 p-0"
                    onClick={() => {
                      navigator.clipboard.writeText(
                        `${location.origin}/auth/sign-up?aff=${userInfo?.invitation_code}`,
                      );
                      toast.success('邀请链接复制成功');
                    }}
                  >
                    <Copy className="text-primary size-5" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>复制邀请链接</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </CardHeader>
          <CardContent className="text-2xl font-bold">
            {userInfo?.invitation_code}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
