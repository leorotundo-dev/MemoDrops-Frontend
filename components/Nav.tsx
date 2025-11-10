'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
  { href: '/dashboard', label: 'Início' },
  { href: '/decks', label: 'Decks' },
  { href: '/study', label: 'Estudar' },
  { href: '/profile', label: 'Perfil' }
];

export default function Nav(){
  const path = usePathname();
  return (
    <nav className="glass sticky top-0 z-20 mx-auto mt-3 w-full max-w-5xl rounded-full px-3 py-2">
      <ul className="flex items-center justify-between gap-2 text-sm">
        <li className="font-semibold">MemoDrops</li>
        <div className="flex items-center gap-1">
          {links.map(l => (
            <li key={l.href}>
              <Link
                className={clsx("px-3 py-1.5 rounded-full hover:bg-white", path.startsWith(l.href) && "bg-white")}
                href={l.href}>{l.label}</Link>
            </li>
          ))}
        </div>
      </ul>
    </nav>
  );
}
