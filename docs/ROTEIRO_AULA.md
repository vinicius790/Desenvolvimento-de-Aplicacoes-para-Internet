# Roteiro de aula — do original quebrado ao SPA completo

## Mapa pastas originais → nova estrutura

| Original (quebrado) | Novo |
|---------------------|------|
| `Projeto de sexta/Fonte/` | `src/` |
| `Projeto de sexta/P1/` | `public/` |
| `Fonte/Componentes/` | `src/components/` |
| `Componentes/Banner/` | `components/Banner/` |
| `Componentes/Formulário/` | `components/Formulario/` |
| `Componentes/Campo texto/` | `components/CampoTexto/` |
| `Componentes/Lista suspensa/` | `components/ListaSuspensa/` |
| `Componentes/Botão/` | `components/Botao/` |
| `P1/Fotos/tambaqui.png` | `public/imagens/tambaqui.png` |
| `App` importa `./componentes` | `./components` (case correto) |
| Form importa `../campoTexto` | `../CampoTexto` |
| 16 workflows template | `.github/workflows/ci.yml` |

## Sequência pedagógica sugerida

1. **Diagnosticar** o original em `original-snapshot/` (imports, CSS rgba, pastas).
2. **Corrigir layout CRA** (`src`/`public`) e nomes ASCII.
3. **Controlar o form** (estado → depois RHF+Zod).
4. **Elevar estado** para App → depois Zustand.
5. **Criar Time + Colaborador** (organograma).
6. **Persistir** localStorage.
7. **Rotas** (Router) e páginas.
8. **API mock** com MSW (contrato HTTP sem backend).
9. **Painel** Recharts + export JSON.
10. **Testes** e CI.

## Bugs clássicos para mostrar em sala

- `rgba(0,0,0,6)` vs `rgba(0,0,0,0.08)`
- pasta `Botão` vs import `Botao`
- Banner `/imagens/tambaqui.png` sem arquivo em `public/imagens`
- option sem `key`
- botão submit sem `preventDefault` / sem estado
