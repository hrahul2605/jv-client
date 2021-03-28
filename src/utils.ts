import { Dayjs } from 'dayjs';

export const tuple = <T extends string[]>(...args: T): [...typeof args] => args;

export const getServer = (): string => {
  if (process.env.NODE_ENV !== 'production') return 'http://localhost:5000';
  return process.env.SERVER_URL || 'http://localhost:5000';
};

export const prettyDateFormat = 'MMMM D, YYYY h:mm A';
export const dateFormat = 'MM-DD-YYYY HH:mm:ss'; // @TODO: dayjs takes this format only

export const getSeconds = (instance: Dayjs, time: string) => {
  const minutes = Math.abs(instance.diff(time, 'minutes'));
  const seconds = Math.abs(instance.diff(time, 'seconds'));
  return seconds - minutes * 60;
};

export const getMinutes = (instance: Dayjs, time: string) => {
  const hours = Math.abs(instance.diff(time, 'hours'));
  const minutes = Math.abs(instance.diff(time, 'minutes'));
  return minutes - hours * 60;
};

export const getHours = (instance: Dayjs, time: string) => {
  return Math.abs(instance.diff(time, 'hours'));
};

export const getFormmattedDigit = (digit: number): string => {
  return digit < 10 ? `0${digit}` : `${digit}`;
};
