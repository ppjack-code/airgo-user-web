'use client';

import { useConfig } from '@/stores/config';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { type ThemeProviderProps } from 'next-themes/dist/types';

export default function ThemeProvider({
  children,
  ...props
}: ThemeProviderProps) {
  const { mode } = useConfig();
  return (
    <NextThemesProvider
      attribute="data-mode"
      defaultTheme={mode}
      enableSystem
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}
