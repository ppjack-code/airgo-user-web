import { getTranslation } from '@/i18n';
import Link from 'next/link';

export default async function Footer({ lng }: { lng: string }) {
  const { t } = await getTranslation(lng, 'index');
  return (
    <footer>
      <div className="container my-6 grid grid-cols-2 gap-8 p-4 lg:grid-cols-4">
        <div>
          <h4 className="mb-4 text-lg font-bold">特性</h4>
          <ul className="text-muted-foreground grid gap-2">
            <li>
              <Link href="#">优质资源</Link>
            </li>
            <li>
              <Link href="#">数据中心</Link>
            </li>
            <li>
              <Link href="#">控制面板</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-lg font-bold">数据及支持</h4>
          <ul className="text-muted-foreground grid gap-2">
            <li>
              <Link href="#">软件中心</Link>
            </li>
            <li>
              <Link href="#">文档中心</Link>
            </li>
            <li>
              <Link href="#">服务状态</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-lg font-bold">条款及保障</h4>
          <ul className="text-muted-foreground grid gap-2">
            <li>
              <Link href="#">使用条款</Link>
            </li>
            <li>
              <Link href="#">隐私政策</Link>
            </li>
            <li>
              <Link href="#">服务保障</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-lg font-bold">关于</h4>
          <ul className="text-muted-foreground grid gap-2">
            <li>
              <Link href="#">关于我们</Link>
            </li>
            <li>
              <Link href="#">推介计划</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-muted-foreground container border-t  py-8">
        <p>&copy; 2024. All rights reserved.</p>
      </div>
    </footer>
  );
}
