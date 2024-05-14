import { DEFAULT_LANGUAGE } from '@/lib/env';

export const fallbackLng = DEFAULT_LANGUAGE || 'zh-CN';
export const languages = ['zh-CN', 'zh-TW', 'en-US', 'ja-JP', 'ko-KR', 'ru-RU'];
export const defaultNS = 'index';
export const cookieName = 'language';

export function getOptions(
  lng = fallbackLng,
  ns: string | string[] = defaultNS,
) {
  return {
    // debug: true,
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns: Array.isArray(ns) ? ns : [ns],
  };
}
