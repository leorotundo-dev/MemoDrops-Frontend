'use client';

import { useQuery } from '@tanstack/react-query';
import api from '@/lib/api';
import Nav from '@/components/Nav';

export default function ProfilePage(){
  const { data } = useQuery({
    queryKey: ['me'],
    queryFn: async () => (await api.get('/auth/me')).data
  });

  return (
    <main>
      <Nav/>
      <section className="mx-auto mt-8 max-w-2xl px-4">
        <h1 className="title">Perfil</h1>
        <div className="card mt-4">
          <div className="text-sm text-ink-600">Email</div>
          <div className="font-medium">{data?.email}</div>
        </div>
      </section>
    </main>
  );
}
