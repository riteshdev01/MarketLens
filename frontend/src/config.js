const DEFAULT_API_BASE_URL = 'https://marketlens-cj55.onrender.com';
const LOCAL_API_BASE_URL = 'http://localhost:3001';

const configuredApiBaseUrl = import.meta.env.VITE_API_BASE_URL?.trim();
const configuredSocketUrl = import.meta.env.VITE_SOCKET_URL?.trim();

// Production always uses the deployed backend; VITE_* values only customize local development.
const API_BASE_URL = import.meta.env.PROD
  ? DEFAULT_API_BASE_URL
  : (configuredApiBaseUrl || LOCAL_API_BASE_URL);
const SOCKET_URL = import.meta.env.PROD
  ? DEFAULT_API_BASE_URL
  : (configuredSocketUrl || LOCAL_API_BASE_URL);

export { API_BASE_URL, SOCKET_URL };
