/* eslint-disable @typescript-eslint/no-unused-vars */
import axios, { AxiosRequestConfig } from 'axios';
import { getServer } from '../utils';

export interface AxiosRequestConfigType extends AxiosRequestConfig {
  open?: boolean;
  removeBaseUrl?: boolean;
}
const instance = axios.create();

instance.interceptors.request.use((req: AxiosRequestConfigType) => {
  if (!req.open) {
    req.withCredentials = true;
  }
  const server = getServer();
  if (!req.removeBaseUrl) req.url = `${server}${req.url}`;
  return req;
});

// https://medium.com/swlh/handling-access-and-refresh-tokens-using-axios-interceptors-3970b601a5da

instance.interceptors.response.use(
  res => {
    return res;
  },
  error => {
    if (error.response.status === 401) {
      //   handle reset
    }
    throw error;
  },
);

export default instance;
