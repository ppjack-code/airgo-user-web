import { ScrollArea } from '@/components/ui/scroll-area';
import { Toaster } from '@/components/ui/sonner';
import { dir, languages } from '@/i18n';
import { DEFAULT_MODE, DEFAULT_THEME } from '@/lib/env';
import { cn } from '@/lib/utils';
import {
  AuthProvider,
  ReactQueryProvider,
  Scripts,
  ThemeProvider,
} from '@/providers';
import '@/styles/globals.css';
import { Noto_Sans as FontSans } from 'next/font/google';
import { cookies } from 'next/headers';
import Footer from './footer';
import Header from './header';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export { metadata, viewport } from '@/lib/meta';

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default function RootLayout({
  children,
  params: { lng },
}: {
  children: React.ReactNode;
  params: { lng: string };
}) {
  const cookieStore = cookies();
  const mode = cookieStore.get('mode')?.value || DEFAULT_MODE;
  const theme = cookieStore.get('theme')?.value || DEFAULT_THEME;

  return (
    <html
      lang={lng}
      data-mode={mode}
      data-theme={theme}
      dir={dir(lng)}
      suppressHydrationWarning
    >
      <head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      </head>
      <ReactQueryProvider>
        <ThemeProvider>
          <body
            className={cn(
              'min-h-screen bg-background font-sans antialiased',
              fontSans.variable,
            )}
          >
            <ScrollArea className="h-dvh max-h-screen w-dvw max-w-full">
              <AuthProvider>
                <Header lng={lng} />
                <main className="relative min-h-[calc(100vh-64px-302px)] w-screen p-4">
                  {children}
                </main>
                <Footer lng={lng} />
              </AuthProvider>
            </ScrollArea>
            <Toaster closeButton richColors dir={dir(lng)} />
            <Scripts />
          </body>
        </ThemeProvider>
      </ReactQueryProvider>
    </html>
  );
}
