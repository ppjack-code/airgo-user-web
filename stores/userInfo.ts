import { getCustomerUserGetUserInfo } from '@/service/api/customerApiUser';
import { getPublicServerGetPublicSetting } from '@/service/api/publicApiServer';
import { useQuery } from '@tanstack/react-query';
import Cookies from 'js-cookie';
import { proxy, useSnapshot } from 'valtio';

export interface IUserInfo {
  token: string;
  user: any;
  publicConfig: any;
}

export const userInfo = proxy<IUserInfo>({
  token: Cookies.get('Authorization') || '',
  user: null,
  publicConfig: null,
});

export function userLogin(token: string) {
  Cookies.set('Authorization', token);
  userInfo.token = token;
}

export function setUser(user: any) {
  userInfo.user = user;
}

export function setConfig(publicConfig: any) {
  userInfo.publicConfig = publicConfig;
}

export function userLogout() {
  userInfo.token = '';
  userInfo.user = null;
  Cookies.remove('Authorization');
}

export function useUserInfo() {
  const { user, token } = useSnapshot(userInfo);
  const { refetch, isFetching } = useQuery({
    enabled: !!token,
    queryKey: ['getCustomerUserGetUserInfo'],
    queryFn: async () => {
      const result = await getCustomerUserGetUserInfo();
      setUser(result.data?.data);
      return result.data?.data || {};
    },
  });

  return {
    userInfo: user,
    getUserInfo: refetch,
    isFetching,
  };
}

export function usePublicConfig() {
  const { publicConfig } = useSnapshot(userInfo);

  useQuery({
    queryKey: ['getPublicServerGetPublicSetting'],
    queryFn: async () => {
      const result = await getPublicServerGetPublicSetting();
      const data = result.data?.data;
      const config = {
        ...data,
        acceptable_email_suffixes: data.acceptable_email_suffixes.split('\n'),
        backend_url: data.backend_url.split('\n'),
      };
      userInfo.publicConfig = config;
      return config || {};
    },
  });

  return publicConfig;
}
