import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/,'') || 'http://localhost:3001'
});

// Small util to read token from localStorage when in browser
function getToken(): string | null {
  if (typeof window === 'undefined') return null;
  try {
    return localStorage.getItem('memodrops:token');
  } catch { return null; }
}

api.interceptors.request.use((config) => {
  const t = getToken();
  if (t) {
    config.headers = config.headers || {};
    (config.headers as any)['Authorization'] = `Bearer ${t}`;
  }
  return config;
});

api.interceptors.response.use(
  (r) => r,
  (err) => {
    // Optionally: handle 401 to redirect
    if (err?.response?.status === 401 && typeof window !== 'undefined') {
      // localStorage.removeItem('memodrops:token');
      // location.href = '/login';
    }
    return Promise.reject(err);
  }
);

export default api;
