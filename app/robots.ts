import { SITE_URL } from '@/lib/env';
import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // disallow: '/private/',
      },
      {
        userAgent: 'Googlebot',
        allow: ['/'],
        // disallow: '/private/',
      },
      {
        userAgent: 'bingbot',
        allow: ['/'],
        // disallow: '/private/',
      },
      {
        userAgent: 'Baiduspider',
        allow: ['/'],
        // disallow: '/private/',
      },
      {
        userAgent: 'YandexBot',
        allow: ['/'],
      },
    ],
    host: SITE_URL,
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
