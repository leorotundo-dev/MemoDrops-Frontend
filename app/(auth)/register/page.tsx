'use client';

import { useState } from 'react';
import Link from 'next/link';
import api from '@/lib/api';
import { setToken } from '@/lib/auth';
import { useRouter } from 'next/navigation';

export default function RegisterPage(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function onSubmit(e: React.FormEvent){
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await api.post('/auth/register', { email, password, name });
      if (data?.token) setToken(data.token);
      router.push('/dashboard');
    } catch (e:any) {
      alert(e?.response?.data?.error || 'Erro ao criar conta');
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="mx-auto mt-20 max-w-md px-4">
      <h1 className="title">Criar conta</h1>
      <form onSubmit={onSubmit} className="mt-6 space-y-3">
        <input className="input" placeholder="Nome" value={name} onChange={e=>setName(e.target.value)} />
        <input className="input" placeholder="Email" type="email" value={email} onChange={e=>setEmail(e.target.value)} />
        <input className="input" placeholder="Senha" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
        <button className="btn-primary w-full" disabled={loading}>{loading? 'Criando...' : 'Criar conta'}</button>
      </form>
      <p className="mt-4 text-sm text-ink-600">Já tem conta? <Link className="underline" href="/login">Entrar</Link></p>
    </main>
  );
}
