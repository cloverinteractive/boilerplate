// @flow

export const env = (key: string, fallback: any = ''): any => process.env[key] || fallback;

export const isDevelopment = env('NODE_ENV') !== 'production';

export const isProduction = !isDevelopment;
