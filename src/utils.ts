export const tuple = <T extends string[]>(...args: T): [...typeof args] => args;

export const getServer = (): string => {
  if (process.env.NODE_ENV !== 'production') return 'http://localhost:5000';
  return process.env.SERVER_URL || 'http://localhost:5000';
};
