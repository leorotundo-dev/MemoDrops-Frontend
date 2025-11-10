# MemoDrops Frontend (Next.js + Tailwind + React Query + Zustand)

Pronto para **Railway**. Baseado no seu checklist (Next.js TS, Axios, TanStack Query, Zustand, envs `NEXT_PUBLIC_*`).

## 🚀 Rodar local
```bash
cp .env.example .env.local
# edite NEXT_PUBLIC_API_URL apontando para seu backend Railway
npm i
npm run dev
```

## 🔑 Env (Vercel/Railway)
- `NEXT_PUBLIC_API_URL` → URL do backend (ex.: `https://api-production-xxx.up.railway.app`)
- `NEXT_PUBLIC_SENTRY_DSN` (opcional)
- `NEXT_PUBLIC_GOOGLE_CLIENT_ID` / `NEXT_PUBLIC_APPLE_CLIENT_ID` (opcional)

## 🔒 Autenticação
- Páginas protegidas usam `middleware.ts` (verifica cookie `token`).
- `login` e `register` salvam `token` em localStorage + cookie.
- Axios injeta `Authorization: Bearer <token>` automaticamente.

> Endpoints esperados do backend: `/auth/register`, `/auth/login`, `/auth/me`, `/decks/*`, `/cards/*`, `/users/:id/stats`. Ajuste `lib/api.ts` se necessário.

## 🧱 Stack
- Next.js 14 (App Router, TS)
- Tailwind CSS (UI moderna, "glass" leve)
- TanStack React Query 5 (cache e status de requisições)
- Zustand (estado global leve)
- Axios (interceptors de token)
- Middleware de proteção de rotas (Next Middleware)

## 🧪 Testes de fumaça
- Landing abre em `/`
- Fluxo Auth:
  - POST `/auth/login` → redireciona para `/dashboard`
  - `/dashboard` carrega estatísticas do usuário
- Decks:
  - `/decks` lista decks do usuário
  - `/decks/:id` lista cards
- Estudo:
  - `/study` chama `/decks/:deckId/cards/due` e `/cards/:cardId/review`

## 🛠 Deploy no Railway
1. Crie um novo serviço Railway **Node.js** com este repo.
2. Defina variáveis:
   - `NEXT_PUBLIC_API_URL=https://<sua-api>.up.railway.app`
3. Railway detecta `npm run build` e `npm start` automaticamente (veja `railway.json`).
4. **Saúde**: Home `/` retorna 200 e exibe a landing.

## 🧭 Organização de código
```
app/
  (auth)/login, (auth)/register
  dashboard, decks, decks/[id], study, profile
components/
lib/ (api, query, store, auth)
```

## ⚠️ Observações
- Se você usa refresh tokens HTTP-only, adapte `lib/api.ts` (interceptor) e a persistência (evitar localStorage). 
- Para Sentry frontend, inicialize no `app/layout.tsx` com DSN (`NEXT_PUBLIC_SENTRY_DSN`).

---

Feito para integrar rapidamente com o backend MemoDrops já padronizado em JWT e rotas protegidas.
