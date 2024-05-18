'use client';

import Icon from '@/components/Icon';
import SwitchLanguage from '@/components/switch-language';
import SwitchThemeMode from '@/components/switch-theme-mode';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useTranslation } from '@/i18n/client';
import { GITHUB, TELEGRAM } from '@/lib/env';
import { useUserInfo, userLogout } from '@/stores/userInfo';
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import {
  Book,
  Bot,
  Home,
  ListOrdered,
  LogOut,
  Menu,
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
  const navs = [
    {
      title: '主页',
      icon: <Home className="mr-2 size-4" />,
      href: `/${lng}/user`,
    },
    {
      title: '购买订阅',
      icon: <Store className="mr-2 size-4" />,
      href: `/${lng}/user/store`,
    },
    {
      title: '我的订单',
      icon: <ListOrdered className="mr-2 size-4" />,
      href: `/${lng}/user/orders`,
    },
    {
      title: '个人信息',
      icon: <User className="mr-2 size-4" />,
      href: `/${lng}/user/profile`,
    },
    {
      title: '使用文档',
      icon: <Book className="mr-2 size-4" />,
      href: `/${lng}/user/docs`,
    },
    {
      title: '我的工单',
      icon: <Bot className="mr-2 size-4" />,
      href: `/${lng}/user/tickets`,
    },
    {
      title: '财务中心',
      icon: <Wallet className="mr-2 size-4" />,
      href: `/${lng}/user/wallet`,
    },
  ];
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
        <div className="flex items-center gap-2">
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
          {TELEGRAM && (
            <Link href={TELEGRAM} target="_blank">
              <Icon icon="logos:telegram" />
            </Link>
          )}
          {GITHUB && (
            <Link href={GITHUB} target="_blank">
              <Icon icon="logos:github-icon" className="dark:invert" />
            </Link>
          )}
          <SwitchThemeMode />
          <SwitchLanguage />
          {userInfo && (
            <>
              <Avatar className="size-6">
                <AvatarImage src={userInfo.avatar} alt={userInfo.user_name} />
                <AvatarFallback className="flex size-full items-center justify-center rounded-full bg-muted-foreground text-center">
                  {userInfo.user_name.slice(0, 1).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Menu className="size-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {navs.map((nav, index) => (
                    <DropdownMenuItem
                      key={index}
                      onClick={() => {
                        router.push(nav.href);
                      }}
                    >
                      {nav.icon}
                      {nav.title}
                    </DropdownMenuItem>
                  ))}
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
            </>
          )}
        </div>
      </div>
    </header>
  );
}
