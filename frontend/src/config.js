const DEFAULT_API_BASE_URL = 'https://marketlens-cj55.onrender.com';

// Hosting environments can override these values with VITE_* variables.
// The production fallback must not point at the developer's local machine.
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL
  || (import.meta.env.PROD ? DEFAULT_API_BASE_URL : 'http://localhost:3001');
const SOCKET_URL = import.meta.env.VITE_SOCKET_URL
  || (import.meta.env.PROD ? DEFAULT_API_BASE_URL : 'http://localhost:3001');

export { API_BASE_URL, SOCKET_URL };
