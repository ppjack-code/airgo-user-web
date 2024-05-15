const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: process.env.OUTPUT || undefined,
  env: {
    DEFAULT_MODE: process.env.DEFAULT_MODE,
    DEFAULT_THEME: process.env.DEFAULT_THEME,

    DEFAULT_LANGUAGE: process.env.DEFAULT_LANGUAGE,

    SITE_URL: process.env.SITE_URL,
    API_URL: process.env.API_URL,

    EMAIL: process.env.EMAIL,

    BAIDU: process.env.BAIDU,
    GOOGLE: process.env.GOOGLE,
    YANDEX: process.env.YANDEX,
    FACEBOOK: process.env.FACEBOOK,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = withPWA(nextConfig);
