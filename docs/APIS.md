# APIs — Mock local (MSW)

> **Aviso:** não existe backend real. O Mock Service Worker intercepta `fetch`/`XHR` no browser e nos testes. Em produção estática sem o worker, o app continua funcionando só com Zustand + localStorage.

Base URL: `/api`

## Endpoints

### `GET /api/health`

```json
{ "ok": true, "mock": true, "mensagem": "API mock MSW — apenas demonstração local.", "timestamp": "…" }
```

### `GET /api/times`

Retorna o array de times (nome, corPrimaria, corSecundaria).

### `GET /api/colaboradores`

Lista colaboradores em memória do worker (reinicia com o refresh do SW).

### `POST /api/colaboradores`

Body (JSON):

```json
{
  "nome": "string",
  "email": "string",
  "telefone": "string",
  "time": "Síndico|Condômino|…",
  "observacoes": "string?",
  "imagem": "url?"
}
```

- `codigoAcesso` / senha são **ignorados** pelo handler.
- Resposta `201` com objeto criado (`id`, `criadoEm`, …).

### `DELETE /api/colaboradores/:id`

Remove do DB mock. `404` se inexistente.

## Cliente

- `src/api/client.js` — Axios `baseURL: '/api'`
- `src/api/colaboradoresApi.js` — funções tipadas por uso
- Handlers: `src/mocks/handlers.js`
- Bootstrap: `src/index.js` → `worker.start()`

## Fluxo de cadastro

1. Validação Zod no formulário  
2. Hash demo do código (Web Crypto) → `authBlob` no Zustand  
3. Persistência imediata no store (fonte da verdade da UI)  
4. Espelhamento opcional `POST /api/colaboradores` (toast se MSW falhar)
