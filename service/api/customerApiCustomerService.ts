// @ts-ignore
/* eslint-disable */
import request from '@/lib/request';

/** 获取服务列表 GET /api/customer/customerService/getCustomerServiceList */
export async function getCustomerCustomerServiceGetCustomerServiceList(options?: {
  [key: string]: any;
}) {
  return request<API.ResponseStruct>('/api/customer/customerService/getCustomerServiceList', {
    method: 'GET',
    ...(options || {}),
  });
}

/** push POST /api/customer/customerService/pushCustomerService */
export async function postCustomerCustomerServicePushCustomerService(
  body: API.PushCustomerServiceRequest,
  options?: { [key: string]: any },
) {
  return request<API.ResponseStruct>('/api/customer/customerService/pushCustomerService', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 重置订阅uuid POST /api/customer/customerService/resetSubscribeUUID */
export async function postCustomerCustomerServiceResetSubscribeUuid(
  body: API.CustomerService,
  options?: { [key: string]: any },
) {
  return request<API.ResponseStruct>('/api/customer/customerService/resetSubscribeUUID', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
