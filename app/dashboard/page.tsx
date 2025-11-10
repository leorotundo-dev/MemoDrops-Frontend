'use client';

import { useQuery } from '@tanstack/react-query';
import api from '@/lib/api';
import Nav from '@/components/Nav';

export default function DashboardPage(){
  const { data } = useQuery({
    queryKey: ['me','stats'],
    queryFn: async () => {
      const me = await api.get('/auth/me');
      const stats = await api.get(`/users/${me.data.id}/stats`);
      return { me: me.data, stats: stats.data };
    }
  });

  return (
    <main>
      <Nav/>
      <section className="mx-auto mt-8 max-w-5xl px-4">
        <h1 className="title">Olá, {data?.me?.name || 'estudante'} 👋</h1>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="card"><div className="kicker">Decks</div><div className="text-2xl">{data?.stats?.total_decks ?? '-'}</div></div>
          <div className="card"><div className="kicker">Cards</div><div className="text-2xl">{data?.stats?.total_cards ?? '-'}</div></div>
          <div className="card"><div className="kicker">Vencidos hoje</div><div className="text-2xl">{data?.stats?.cards_due_today ?? '-'}</div></div>
        </div>
      </section>
    </main>
  );
}
