'use client';

export function setToken(token: string) {
  localStorage.setItem('memodrops:token', token);
  document.cookie = `token=${token}; path=/; SameSite=Lax;`;
}

export function clearToken() {
  localStorage.removeItem('memodrops:token');
  document.cookie = `token=; Max-Age=0; path=/;`;
}

export function getTokenFromCookie(): string | null {
  if (typeof document === 'undefined') return null;
  const m = document.cookie.match(/(?:^|; )token=([^;]+)/);
  return m ? decodeURIComponent(m[1]) : null;
}
