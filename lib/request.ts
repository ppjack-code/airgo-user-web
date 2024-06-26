import axios, { InternalAxiosRequestConfig } from 'axios';
import Cookies from 'js-cookie';
import { toast } from 'sonner';
import { API_URL, isBrowser } from './env';

const request = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  // timeout: 10000,
});

request.interceptors.request.use(
  async (request: InternalAxiosRequestConfig) => {
    let Authorization;
    if (isBrowser) Authorization = Cookies.get('Authorization');
    if (Authorization) request.headers.Authorization = Authorization;
    return request;
  },
  (error) => {
    return Promise.reject(error);
  },
);

request.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const code = error.response?.data?.code;
    switch (code) {
      default:
        toast.error(
          error.response?.data?.message ||
            error.response?.statusText ||
            'Error',
        );
        break;
    }
    return Promise.reject(error);
  },
);

export default request;
