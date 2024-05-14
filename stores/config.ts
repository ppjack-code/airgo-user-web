import { DEFAULT_MODE, DEFAULT_THEME, isBrowser } from '@/lib/env';
import Cookies from 'js-cookie';
import { useTheme } from 'next-themes';
import { proxy, useSnapshot } from 'valtio';

export interface IConfig {
  mode: 'light' | 'dark';
  theme:
    | 'zinc'
    | 'slate'
    | 'stone'
    | 'gray'
    | 'neutral'
    | 'red'
    | 'rose'
    | 'orange'
    | 'green'
    | 'blue'
    | 'yellow'
    | 'violet'
    | string;
}
export const config = proxy<IConfig>({
  mode: (Cookies.get('mode') || DEFAULT_MODE) as IConfig['mode'],
  theme: Cookies.get('theme') || DEFAULT_THEME,
});

export function updateMode(mode: IConfig['mode']) {
  config.mode = mode;
  Cookies.set('mode', mode);
  if (isBrowser) document.documentElement.setAttribute('data-mode', mode);
}

export function updateTheme(theme: IConfig['theme']) {
  Cookies.set('theme', theme);
  config.theme = theme;
  if (isBrowser) document.documentElement.setAttribute('data-theme', theme);
}

export function useConfig() {
  const { mode, theme } = useSnapshot(config);
  const { setTheme } = useTheme();
  return {
    mode,
    theme,
    updateMode: (mode: IConfig['mode']) => {
      updateMode(mode);
      setTheme(mode);
    },
    updateTheme,
  };
}
