'use client';

import { useEffect, useState } from 'react';
import api from '@/lib/api';
import Nav from '@/components/Nav';

type Card = { id: string; front: string; back: string };

export default function StudyPage(){
  const [deckId, setDeckId] = useState<string>('');
  const [cards, setCards] = useState<Card[]>([]);
  const [i, setI] = useState(0);
  const [showBack, setShowBack] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        if (!deckId) return;
        const r = await api.get(`/decks/${deckId}/cards/due`);
        setCards(r.data || []);
        setI(0);
        setShowBack(false);
      } catch (e) { console.error(e); }
    })();
  }, [deckId]);

  const cur = cards[i];

  async function rate(rating: 1|2|3|4|5){
    if (!cur) return;
    await api.post(`/cards/${cur.id}/review`, { rating });
    const next = i + 1;
    setI(next);
    setShowBack(false);
  }

  return (
    <main>
      <Nav/>
      <section className="mx-auto mt-8 max-w-xl px-4 text-center">
        <h1 className="title">Estudar</h1>
        <div className="mt-4">
          <input className="input" placeholder="ID do Deck" value={deckId} onChange={e=>setDeckId(e.target.value)} />
        </div>

        {!cur && <p className="mt-6 text-ink-600">Sem cards vencidos para este deck.</p>}
        {cur && (
          <div className="card mt-6">
            <div className="text-left">
              <div className="kicker">Pergunta</div>
              <div className="font-medium mt-1">{cur.front}</div>
            </div>
            {showBack ? (
              <div className="text-left mt-4">
                <div className="kicker">Resposta</div>
                <div className="mt-1">{cur.back}</div>
              </div>
            ) : (
              <button className="btn-ghost mt-4" onClick={()=>setShowBack(true)}>Mostrar resposta</button>
            )}

            {showBack && (
              <div className="mt-4 grid grid-cols-4 gap-2">
                <button className="btn-ghost" onClick={()=>rate(1)}>Novamente</button>
                <button className="btn-ghost" onClick={()=>rate(3)}>Difícil</button>
                <button className="btn-ghost" onClick={()=>rate(4)}>Bom</button>
                <button className="btn-primary" onClick={()=>rate(5)}>Fácil</button>
              </div>
            )}
          </div>
        )}
      </section>
    </main>
  );
}
