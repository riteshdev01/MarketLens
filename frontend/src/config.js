const DEFAULT_API_BASE_URL = 'https://marketlens-cj55.onrender.com';
const LOCAL_API_BASE_URL = 'http://localhost:3001';

const isLoopbackUrl = (value) => {
  try {
    return ['localhost', '127.0.0.1', '[::1]'].includes(new URL(value).hostname);
  } catch {
    return false;
  }
};
const configuredApiBaseUrl = import.meta.env.VITE_API_BASE_URL?.trim();
const configuredSocketUrl = import.meta.env.VITE_SOCKET_URL?.trim();

// Hosting environments can override these values with VITE_* variables.
// Never allow a production build to call the developer's local machine.
const API_BASE_URL = import.meta.env.PROD
  ? (configuredApiBaseUrl && !isLoopbackUrl(configuredApiBaseUrl)
      ? configuredApiBaseUrl
      : DEFAULT_API_BASE_URL)
  : (configuredApiBaseUrl || LOCAL_API_BASE_URL);
const SOCKET_URL = import.meta.env.PROD
  ? (configuredSocketUrl && !isLoopbackUrl(configuredSocketUrl)
      ? configuredSocketUrl
      : DEFAULT_API_BASE_URL)
  : (configuredSocketUrl || LOCAL_API_BASE_URL);

export { API_BASE_URL, SOCKET_URL };
