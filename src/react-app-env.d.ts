/* eslint-disable no-unused-vars */
/// <reference types="react-scripts" />
import { AxiosRequestConfigType } from './interceptors/axios';

declare module 'axios' {
  interface AxiosInstance {
    (config: AxiosRequestConfigType): AxiosPromise<any>;
  }
}
