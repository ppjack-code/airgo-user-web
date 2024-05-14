'use client';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useConfig } from '@/stores/config';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';

export default function SwitchThemeMode() {
  const { mode, updateMode } = useConfig();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">
          {mode === 'dark' && <MoonIcon />}
          {mode === 'light' && <SunIcon />}
          <span className="sr-only">Toggle Theme Mode</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => updateMode('light')}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => updateMode('dark')}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            window.matchMedia('(prefers-color-scheme: dark)').matches
              ? updateMode('dark')
              : updateMode('light');
          }}
        >
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
