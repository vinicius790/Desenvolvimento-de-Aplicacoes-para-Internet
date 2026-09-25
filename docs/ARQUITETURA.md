# Arquitetura

## Visão em camadas

```
┌─────────────────────────────────────────────┐
│  Pages (Router)  Home · Cadastro · Painel · Sobre │
├─────────────────────────────────────────────┤
│  Components  Banner Formulario Time Colaborador…  │
├─────────────────────────────────────────────┤
│  Store Zustand  colaboradores · times · authBlob  │
│       └─ persist → localStorage                   │
├─────────────────────────────────────────────┤
│  API Axios  ←→  MSW (/api)  ←→  mocks/db (RAM)    │
├─────────────────────────────────────────────┤
│  utils (Zod) · i18n · lib/exportJson · hooks      │
└─────────────────────────────────────────────┘
```

## Fluxo de dados (cadastro → organograma)

1. Usuário preenche `Formulario` (RHF + Zod).
2. `CadastroPage` chama `adicionarColaborador` no **Zustand**.
3. Store gera `id` (nanoid), `criadoEm` (ISO), guarda hash opcional em `authBlob`.
4. Tentativa de `POST /api/colaboradores` (MSW).
5. `HomePage` lê `colaboradores` + `filtro`, agrupa por `Time`, renderiza `Colaborador`.
6. Delete remove do store (e opcionalmente da API mock).

## Por que Zustand + MSW

- Zustand: estado previsível e persistência sem boilerplate de Context.
- MSW: ensina contrato HTTP **sem** fingir que há servidor em nuvem.

## Senha / código de acesso

Campo opcional no form → `hashDemo()` → só `authBlob[id]`.  
Props do card **não** incluem senha. Export JSON também não inclui `authBlob` por padrão (só colaboradores + times públicos).
