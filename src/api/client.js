import axios from 'axios';

/**
 * Cliente HTTP para a API mock (MSW intercepta em /api/*).
 * Em produção estática sem worker, as funções em colaboradoresApi usam fallback local.
 */
const api = axios.create({
  baseURL: '/api',
  headers: { 'Content-Type': 'application/json' },
  timeout: 5000,
});

export default api;
