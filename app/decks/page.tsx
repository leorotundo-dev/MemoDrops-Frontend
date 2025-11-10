'use client';

import { useQuery } from '@tanstack/react-query';
import api from '@/lib/api';
import Link from 'next/link';
import Nav from '@/components/Nav';

export default function DecksPage(){
  const { data } = useQuery({
    queryKey: ['my-decks'],
    queryFn: async () => {
      const me = await api.get('/auth/me');
      const r = await api.get(`/decks/user/${me.data.id}`);
      return r.data as Array<{ id: string; title: string }>;
    }
  });

  return (
    <main>
      <Nav/>
      <section className="mx-auto mt-8 max-w-5xl px-4">
        <div className="flex items-center justify-between">
          <h1 className="title">Meus Decks</h1>
          <Link href="/decks/new" className="btn-primary">Novo deck</Link>
        </div>
        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {data?.map(d => (
            <Link key={d.id} href={`/decks/${d.id}`} className="card hover:scale-[1.01] transition-transform">
              <div className="font-medium">{d.title}</div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
