# ENTREGA — Organograma do Condomínio (grandioso)

## O que era o original

- CRA React 18 nomeado `organograma` em `Projeto de sexta/`
- Pastas `Fonte` / `P1` (não `src` / `public`)
- Pastas com espaços e acentos quebrando imports
- Formulário sem estado; botão inerte
- CSS `rgba` inválido
- 16 workflows GitHub Actions de template
- Sem README, testes, `.gitignore`

## Upgrades entregues

| Área | Antes | Depois |
|------|-------|--------|
| Layout | Fonte / P1 | `src/` / `public/` padrão CRA |
| Pastas | `Campo texto`, `Botão`… | ASCII: `CampoTexto`, `Botao`… |
| Estado | nenhum | Zustand + persist |
| Form | inputs soltos | RHF + Zod + máscara tel |
| Senha | campo sem uso | opcional → hash local; **nunca no card** |
| Times | 2 strings | 5 times com cores + CampoCor |
| Cards | inexistentes | Colaborador + Time + delete |
| Rotas | 1 tela | Home / Cadastro / Painel / Sobre |
| API | — | MSW mock `/api/*` + Axios |
| UX | — | sonner, lucide, busca, export JSON, Recharts |
| CI | 16 lixo | 1 workflow `ci.yml` |
| Docs | zero | README + 7 docs pt-BR |
| Testes | zero | validation, Formulario, ListaSuspensa, App |
| Snapshot | — | `original-snapshot/` para comparação |

## Comandos de prova

```bash
npm install
CI=true npm test -- --watchAll=false
npm run build
```

## Stack expandida (wired de verdade)

React Router · Zustand · RHF+Zod · Axios+MSW · nanoid · date-fns@3 · clsx · lucide-react · sonner · PropTypes · Recharts · react-helmet-async · Prettier/ESLint · Jest/RTL.

Ver `docs/TECNOLOGIAS.md` e `docs/APIS.md`.

## Archive

- Primário: `/workspace/organograma-condominio-grandioso.zip` (`.rar` indisponível neste ambiente — sem pacote `rar` no apt)
