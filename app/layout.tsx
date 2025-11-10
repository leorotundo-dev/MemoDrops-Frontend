import type { Metadata } from 'next';
import './globals.css';
import { QueryProvider } from '@/lib/query';

export const metadata: Metadata = {
  title: 'MemoDrops',
  description: 'Flashcards com IA para concursos – estude em pílulas.'
};

export default function RootLayout({ children }: { children: React.ReactNode }){
  return (
    <html lang="pt-BR">
      <body>
        <QueryProvider>
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}
