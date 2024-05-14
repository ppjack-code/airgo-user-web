'use client';

import { useUserInfo } from '@/stores/userInfo';
import { useParams, usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { lng } = useParams<{ lng: string }>();
  const { userInfo, isFetching } = useUserInfo();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (userInfo?.id) {
      if (pathname.includes('/auth')) {
        router.replace(`/${lng}/user`);
      }
    } else if (!isFetching) {
      if (pathname.includes('/user')) {
        router.replace(`/${lng}`);
      }
    }
  }, [isFetching, lng, pathname, router, userInfo?.id]);

  return children;
}
