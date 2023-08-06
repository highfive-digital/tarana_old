export const isValidArray = (value: any) => Array.isArray(value) && value.length > 0;

export const isValidFunction = (value: any) =>
  value instanceof Function && typeof value === 'function';

export const isValidObject = (value: any) =>
  typeof value === 'object' && value !== null && Object.keys(value).length > 0;
