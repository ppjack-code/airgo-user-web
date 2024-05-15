import { EMAIL } from '@/lib/env';
import { Mail } from 'lucide-react';
import Link from 'next/link';

export default async function Footer({ lng }: { lng: string }) {
  return (
    <footer className="container flex flex-col items-center justify-between gap-4 border-t p-4 text-sm text-muted-foreground lg:flex-row">
      {EMAIL && (
        <nav className="flex flex-wrap items-center gap-2">
          联系我们:
          <Link href={`mailto:${EMAIL}`}>
            <Mail className="size-6" />
          </Link>
        </nav>
      )}

      <nav className="flex flex-wrap gap-2">
        <Link href="#">使用条款</Link>
        <Link href="#">隐私政策</Link>
        <Link href="#">服务保障</Link>
        <Link href="#">文档中心</Link>
        <Link href="#">软件中心</Link>
      </nav>
      <p>&copy; 2024. All rights reserved.</p>
    </footer>
  );
}
