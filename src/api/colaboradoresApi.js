import api from './client';

/**
 * Camada de acesso à API mock.
 * Endpoints documentados em docs/APIS.md.
 * MSW (Mock Service Worker) atende estas rotas no browser.
 */

export async function listarColaboradores() {
  const { data } = await api.get('/colaboradores');
  return data;
}

export async function criarColaborador(payload) {
  const { data } = await api.post('/colaboradores', payload);
  return data;
}

export async function removerColaboradorApi(id) {
  const { data } = await api.delete(`/colaboradores/${id}`);
  return data;
}

export async function listarTimes() {
  const { data } = await api.get('/times');
  return data;
}

export async function healthCheck() {
  const { data } = await api.get('/health');
  return data;
}
