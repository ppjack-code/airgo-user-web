'use client';

import SwitchLanguage from '@/components/switch-language';
import SwitchThemeMode from '@/components/switch-theme-mode';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useTranslation } from '@/i18n/client';
import { useUserInfo, userLogout } from '@/stores/userInfo';
import {
  Book,
  Bot,
  Home,
  ListOrdered,
  LogOut,
  Store,
  User,
  Wallet,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Header({ lng }: { lng: string }) {
  const { t } = useTranslation(lng, 'header');
  const { userInfo } = useUserInfo();
  const router = useRouter();
  return (
    <header className="sticky top-0 z-50 flex w-full items-center justify-between gap-4 border-b backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <Link
          href={`/${lng}`}
          className="flex items-center gap-2 text-lg font-semibold md:text-base"
        >
          <Image
            src="/favicon.svg"
            alt="logo"
            width={1024}
            height={1024}
            className="size-12"
          />
          <span>Air Go</span>
        </Link>
        <div className="flex gap-2">
          {!userInfo && (
            <>
              <Link href={`/${lng}/auth/login`}>
                <Button>{t('login')}</Button>
              </Link>
              <Link href={`/${lng}/auth/sign-up`}>
                <Button variant="outline">{t('sign-up')}</Button>
              </Link>
            </>
          )}
          <SwitchLanguage />
          <SwitchThemeMode />
          {userInfo && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="secondary"
                  size="icon"
                  className="rounded-full"
                >
                  <Avatar>
                    <AvatarImage src={userInfo.avatar} alt="@shadcn" />
                    <AvatarFallback>
                      {userInfo.user_name.slice(0, 1).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>

                  <span className="sr-only">Toggle user menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem
                  onClick={() => {
                    router.push(`/${lng}/user`);
                  }}
                >
                  <Home className="mr-2 size-4" />
                  主页
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => {
                    router.push(`/${lng}/user/store`);
                  }}
                >
                  <Store className="mr-2 size-4" /> 商店
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => {
                    router.push(`/${lng}/user/docs`);
                  }}
                >
                  <Book className="mr-2 size-4" /> 使用文档
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => {
                    router.push(`/${lng}/user/orders`);
                  }}
                >
                  <ListOrdered className="mr-2 size-4" />
                  我的订单
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => {
                    router.push(`/${lng}/user/profile`);
                  }}
                >
                  <User className="mr-2 size-4" />
                  个人信息
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => {
                    router.push(`/${lng}/user/tickets`);
                  }}
                >
                  <Bot className="mr-2 size-4" />
                  我的工单
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => {
                    router.push(`/${lng}/user/wallet`);
                  }}
                >
                  <Wallet className="mr-2 size-4" />
                  财务中心
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={() => {
                    userLogout();
                    router.push(`/${lng}`);
                  }}
                >
                  <LogOut className="mr-2 size-4" />
                  退出登录
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      </div>
    </header>
  );
}
