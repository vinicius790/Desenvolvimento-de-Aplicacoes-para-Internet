import { Helmet } from 'react-helmet-async';
import './pages.css';

export default function SobrePage() {
  return (
    <>
      <Helmet>
        <title>Sobre | Organograma do Condomínio</title>
      </Helmet>
      <article className="sobre">
        <h2>Sobre o projeto</h2>
        <p>
          Este SPA é a evolução do projeto de aula <em>organograma</em> do curso{' '}
          <strong>Desenvolvimento de Aplicações para Internet</strong>, inspirado no Organo
          (Alura) e adaptado para papéis de condomínio.
        </p>
        <p>
          Mantém o modelo educacional de componentes React (Banner, Formulário, CampoTexto,
          ListaSuspensa, Botão, Time, Colaborador) e acrescenta roteamento, store, validação Zod,
          API mock com MSW, gráficos e persistência local.
        </p>
        <p>
          Branding visual com o asset <strong>tambaqui</strong> e a cor marca{' '}
          <code>#6278F7</code>.
        </p>
        <p className="sobre__aviso">
          A “API” em <code>/api/*</code> é <strong>mock local</strong> (MSW). Não há backend
          real em produção.
        </p>
      </article>
    </>
  );
}
