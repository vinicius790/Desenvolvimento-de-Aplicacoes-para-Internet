/** Dicionário i18n leve (pt-BR). Sem react-i18next para manter o curso simples. */
const ptBR = {
  app: {
    titulo: 'Organograma do Condomínio',
    subtitulo: 'Cadastre a equipe e visualize papéis no condomínio',
  },
  nav: {
    home: 'Organograma',
    cadastro: 'Cadastro',
    sobre: 'Sobre',
    dashboard: 'Painel',
  },
  form: {
    titulo: 'Preencha os dados para criar o cadastro',
    nome: 'Nome',
    email: 'E-mail',
    telefone: 'Telefone',
    time: 'Tipo / Time',
    observacoes: 'Observações',
    imagem: 'URL da imagem (opcional)',
    senhaDemo: 'Código de acesso (demo local — nunca exibido nos cards)',
    submit: 'Criar cadastro',
    buscar: 'Buscar por nome…',
  },
  empty: {
    titulo: 'Nenhum colaborador cadastrado',
    texto: 'Use o formulário para adicionar síndicos, condôminos e equipe.',
  },
  toast: {
    criado: 'Cadastro criado com sucesso!',
    removido: 'Colaborador removido.',
    exportado: 'Organograma exportado em JSON.',
    erroApi: 'Falha na API mock — tentando fallback local.',
  },
};

export default ptBR;
