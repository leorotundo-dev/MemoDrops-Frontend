import type { Metadata } from 'next';
import './globals.css';
import { QueryProvider } from '@/lib/query';

export const metadata: Metadata = {
  title: 'MemoDrops — Estude com repetição espaçada + IA',
  description: 'O app de estudo por repetição espaçada (SRS) com IA e Índice de Cobrança por banca/cargo. Foco para concurseiros e estudantes de alto desempenho.',
  keywords: ['flashcards', 'repetição espaçada', 'SRS', 'concursos', 'IA', 'estudo', 'memorização'],
  authors: [{ name: 'MemoDrops' }],
  creator: 'MemoDrops',
  publisher: 'MemoDrops',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.memodrops.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'MemoDrops — Estude com repetição espaçada + IA',
    description: 'Revisões inteligentes, conteúdo validado e foco no que mais cai. Disponível para web.',
    url: 'https://www.memodrops.com',
    siteName: 'MemoDrops',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MemoDrops — Estude com repetição espaçada + IA',
    description: 'Revisões inteligentes, conteúdo validado e foco no que mais cai.',
  },
  manifest: '/manifest.json',
  icons: {
    icon: '/icons/icon-192.png',
    apple: '/icons/icon-512.png',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: '#0ea5e9',
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
