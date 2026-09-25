# Tecnologias instaladas e onde entram no código

| Tecnologia | Papel | Onde no código | Instalado |
|------------|-------|----------------|-----------|
| React 18 | UI | `src/**` | `dependencies` |
| react-scripts 5 | CRA build/test/start | scripts npm | `dependencies` |
| react-router-dom | Páginas SPA | `App.js`, `pages/*`, `Navbar` | `dependencies` |
| zustand | Estado global + persist | `store/useOrganogramaStore.js` | `dependencies` |
| react-hook-form | Forms controlados | `components/Formulario` | `dependencies` |
| zod | Schema de validação | `utils/validation.js` | `dependencies` |
| @hookform/resolvers | Liga RHF↔Zod | `Formulario.js` | `dependencies` |
| axios | Cliente HTTP | `api/client.js`, `colaboradoresApi.js` | `dependencies` |
| msw | API mock no browser/test | `mocks/*`, `public/mockServiceWorker.js` | `devDependencies` |
| nanoid | IDs | `utils/validation.js`, `mocks/handlers.js` | `dependencies` |
| date-fns ^3.6.0 | Datas nos cards (pt-BR) | `Colaborador.js` | `dependencies` (v3 p/ Jest/CRA) |
| clsx | Classes condicionais | `lib/cn.js` | `dependencies` |
| lucide-react | Ícones | Navbar, Form, Cards, Rodape… | `dependencies` |
| sonner | Toasts | `App.js`, pages | `dependencies` |
| prop-types | Runtime props | Formulario, Colaborador, Time… | `dependencies` |
| recharts | Gráfico do painel | `Dashboard/DashboardChart.js` | `dependencies` |
| react-helmet-async | `<title>` por rota | pages | `dependencies` |
| prettier + eslint-config-prettier | Formatação | `.prettierrc`, eslintConfig | `devDependencies` |
| @testing-library/* | Testes | `*.test.js` | `dependencies` |
| web-vitals | Perf opcional | `reportWebVitals.js` | `dependencies` |

## Deliberadamente NÃO incluídos (e por quê)

| Item | Motivo |
|------|--------|
| Vite | Curso usa CRA; migração quebraria o roteiro familiar |
| Framer Motion | Risco de bundle/build; animações CSS bastam |
| Storybook | Tempo/complexidade vs. valor na entrega |
| json-server / Express | Substituídos por MSW (sem processo extra) |
| react-i18next | Dict leve `i18n/ptBR.js` suficiente |
| TypeScript full | Mantido JS + PropTypes + JSDoc (história do curso) |
| file-saver | Download via `Blob` nativo em `lib/exportJson.js` |

Tudo listado em `dependencies`/`devDependencies` é **usado de fato** no código.
