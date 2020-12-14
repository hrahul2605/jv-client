export const tuple = <T extends string[]>(...args: T): [...typeof args] => args;
