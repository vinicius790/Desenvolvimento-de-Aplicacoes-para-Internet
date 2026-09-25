import { rest } from 'msw';
import { mockDb } from './db';
import { nanoid } from 'nanoid';

/**
 * Handlers MSW — API mock local (NÃO é backend real).
 * Prefixo: /api
 */
export const handlers = [
  rest.get('/api/health', (_req, res, ctx) =>
    res(
      ctx.status(200),
      ctx.json({
        ok: true,
        mock: true,
        mensagem: 'API mock MSW — apenas demonstração local.',
        timestamp: new Date().toISOString(),
      })
    )
  ),

  rest.get('/api/times', (_req, res, ctx) =>
    res(ctx.status(200), ctx.json(mockDb.getTimes()))
  ),

  rest.get('/api/colaboradores', (_req, res, ctx) =>
    res(ctx.status(200), ctx.json(mockDb.getColaboradores()))
  ),

  rest.post('/api/colaboradores', async (req, res, ctx) => {
    const body = await req.json();
    const criado = {
      id: `colab-${nanoid(10)}`,
      nome: body.nome,
      email: body.email,
      telefone: body.telefone,
      time: body.time,
      observacoes: body.observacoes || '',
      imagem: body.imagem || '',
      criadoEm: new Date().toISOString(),
    };
    // Ignora deliberadamente body.codigoAcesso / senha
    mockDb.addColaborador(criado);
    return res(ctx.status(201), ctx.json(criado));
  }),

  rest.delete('/api/colaboradores/:id', (req, res, ctx) => {
    const { id } = req.params;
    const ok = mockDb.removeColaborador(id);
    if (!ok) {
      return res(ctx.status(404), ctx.json({ erro: 'Não encontrado' }));
    }
    return res(ctx.status(200), ctx.json({ removido: id }));
  }),
];
