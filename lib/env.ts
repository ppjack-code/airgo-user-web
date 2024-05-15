export const isBrowser = typeof window !== 'undefined';

export const DEFAULT_MODE = process.env.DEFAULT_MODE || 'dark';
export const DEFAULT_THEME = process.env.DEFAULT_THEME || 'blue';

export const DEFAULT_LANGUAGE = process.env.DEFAULT_LANGUAGE || '';

export const SITE_URL = process.env.SITE_URL || '';
export const API_URL = process.env.API_URL || '';

export const EMAIL = process.env.EMAIL || '';

export const ANALYTICS = {
  baidu: process.env.BAIDU || '',
  google: process.env.GOOGLE || '',
  yandex: process.env.YANDEX || '',
  facebook: process.env.FACEBOOK || '',
};
