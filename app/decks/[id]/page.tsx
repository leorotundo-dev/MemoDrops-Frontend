'use client';

import { useQuery } from '@tanstack/react-query';
import api from '@/lib/api';
import Nav from '@/components/Nav';
import { useParams } from 'next/navigation';

export default function DeckDetailPage(){
  const params = useParams<{ id: string }>();
  const { data } = useQuery({
    queryKey: ['deck', params.id],
    queryFn: async () => {
      const r = await api.get(`/decks/${params.id}`);
      const cards = await api.get(`/cards/deck/${params.id}`);
      return { deck: r.data, cards: cards.data };
    }
  });

  return (
    <main>
      <Nav/>
      <section className="mx-auto mt-8 max-w-5xl px-4">
        <h1 className="title">{data?.deck?.title || 'Deck'}</h1>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {(data?.cards || []).map((c:any) => (
            <div key={c.id} className="card">
              <div className="font-medium">Q: {c.front}</div>
              <div className="text-sm text-ink-700 mt-1">A: {c.back}</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
