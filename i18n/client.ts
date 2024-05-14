'use client';

import { isBrowser } from '@/lib/env';
import i18next from 'i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import Cookies from 'js-cookie';
import { useParams, usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import {
  initReactI18next,
  useTranslation as useTranslationOrg,
} from 'react-i18next';
import { cookieName, fallbackLng, getOptions, languages } from './config';

const runsOnServerSide = typeof window === 'undefined';

i18next
  .use(initReactI18next)
  .use(
    resourcesToBackend(
      (language: string, namespace: string) =>
        import(`./locales/${language}/${namespace}.json`),
    ),
  )
  .init({
    ...getOptions(),
    lng: undefined, // let detect the language on client side
    detection: {
      order: ['path', 'htmlTag', 'cookie', 'navigator'],
    },
    preload: runsOnServerSide ? languages : [],
  });

export function useTranslation(
  lng: string,
  ns?: string,
  options?: {
    keyPrefix: string;
  },
) {
  const ret = useTranslationOrg(ns, options);
  const { i18n } = ret;
  if (runsOnServerSide && lng && i18n.resolvedLanguage !== lng) {
    i18n.changeLanguage(lng);
  } else {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [activeLng, setActiveLng] = useState(i18n.resolvedLanguage);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      if (activeLng === i18n.resolvedLanguage) return;
      setActiveLng(i18n.resolvedLanguage);
    }, [activeLng, i18n.resolvedLanguage]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      if (!lng || i18n.resolvedLanguage === lng) return;
      i18n.changeLanguage(lng);
    }, [lng, i18n]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      if (Cookies.get(cookieName) === lng) return;
      Cookies.set(cookieName, lng);
    }, [lng]);
  }
  return ret;
}

export function useLanguage() {
  const { lng: currentLanguage } = useParams<{
    lng: string;
  }>();
  const router = useRouter();
  const pathname = usePathname();

  const changeLanguage = (lng: string) => {
    Cookies.set(cookieName, lng);
    if (isBrowser) {
      document.documentElement.setAttribute('lang', lng);
    }
    if (currentLanguage === fallbackLng) {
      router.push('/' + lng + pathname);
    } else {
      router.push(pathname.replace(`/${currentLanguage}`, `/${lng}`));
    }
    router.refresh();
  };

  return {
    lng: currentLanguage,
    changeLanguage,
  };
}
