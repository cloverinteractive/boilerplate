export const env = (key, fallback = '') => process.env[key] || fallback;

export const isDevelopment = env('NODE_ENV') !== 'production';

export const isProduction = !isDevelopment;
