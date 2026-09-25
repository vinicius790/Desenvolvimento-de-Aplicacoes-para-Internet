# Componentes — tabela de props

## Banner
| Prop | Tipo | Descrição |
|------|------|-----------|
| — | — | Sem props; usa `/imagens/tambaqui.png` |

## CampoTexto
| Prop | Tipo | Obrig. | Descrição |
|------|------|--------|-----------|
| label | string | sim | Rótulo acessível |
| placeholder | string | não | Placeholder |
| valor | string | sim | Valor controlado |
| aoAlterado | (v) => void | sim | onChange |
| obrigatorio | bool | não | required + asterisco |
| tipo | string | não | text/email/tel/password/url |
| id | string | não | id do input |
| erro | string | não | Mensagem de erro |
| maxLength | number | não | Limite de caracteres |

## ListaSuspensa
| Prop | Tipo | Obrig. | Descrição |
|------|------|--------|-----------|
| label | string | sim | Rótulo |
| itens | string[] | sim | Opções (`key={item}`) |
| valor | string | sim | Valor controlado |
| aoAlterado | fn | sim | onChange |
| obrigatorio | bool | não | |
| erro | string | não | |

## Botao
| Prop | Tipo | Descrição |
|------|------|-----------|
| children / texto | node/string | Conteúdo |
| tipo | string | submit/button |
| disabled | bool | |
| onClick | fn | opcional |

## Formulario
| Prop | Tipo | Descrição |
|------|------|-----------|
| times | string[] | Nomes dos times |
| aoColaboradorCadastrado | (dados, codigoHash) => Promise | Callback pós-validação |

## Colaborador
| Prop | Tipo | Descrição |
|------|------|-----------|
| colaborador | `{ id, nome, email, telefone, observacoes?, imagem?, criadoEm? }` | **Sem senha** |
| corDeFundo | string | Cor do time |
| aoDeletar | (id) => void | |

## Time
| Prop | Tipo | Descrição |
|------|------|-----------|
| time | `{ nome, corPrimaria, corSecundaria? }` | |
| colaboradores | array | Já filtrados pelo time |
| aoDeletar | fn | |
| aoMudarCor | (nome, cor) => void | opcional (CampoCor) |

## CampoCor
| Prop | Tipo | Descrição |
|------|------|-----------|
| label | string | aria-label |
| valor | string | hex |
| aoAlterado | fn | |

## Busca / Navbar / Rodape / DashboardChart
Ver arquivos em `src/components/` — documentados via PropTypes e JSDoc.
