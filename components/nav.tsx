'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export function NavLinks() {
  const pathname = usePathname();

  return (
    <nav>
      <Link className={`link ${pathname === '/' ? 'text-green-500' : ''}`} href="/">
        Dashboard
      </Link>

      <Link className={`link ${pathname === '/about' ? 'text-green-500' : ''}`} href="/about">
        About
      </Link>
    </nav>
  );
}
