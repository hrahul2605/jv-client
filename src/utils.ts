export const tuple = <T extends string[]>(...args: T): [...typeof args] => args;

export const getServer = (): string => {
  if (process.env.NODE_ENV !== 'production') return 'http://localhost:5000';
  return process.env.SERVER_URL || 'http://localhost:5000';
};

export const prettyDateFormat = 'MMMM D, YYYY h:mm A';
export const dateFormat = 'MM-DD-YYYY HH:mm:ss'; // @TODO: dayjs takes this format only
