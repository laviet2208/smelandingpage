import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'vi'],
  defaultLocale: 'en',
  pathnames: {
    '/': '/',
  },
});

export const config = {
  matcher: [
    '/((?!_next|_vercel|.*\\..*).)*',
  ],
};
