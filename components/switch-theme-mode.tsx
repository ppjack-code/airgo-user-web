'use client';

import { Button } from '@/components/ui/button';
import { useConfig } from '@/stores/config';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';

export default function SwitchThemeMode() {
  const { mode, updateMode } = useConfig();
  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => {
        updateMode(mode === 'dark' ? 'light' : 'dark');
      }}
    >
      {mode === 'dark' && <MoonIcon />}
      {mode === 'light' && <SunIcon />}
      <span className="sr-only">Toggle Theme Mode</span>
    </Button>
  );
}
