import { Helmet } from 'react-helmet-async';
import DashboardChart from '../components/Dashboard';
import useOrganogramaStore from '../store/useOrganogramaStore';
import './pages.css';

export default function PainelPage() {
  const colaboradores = useOrganogramaStore((s) => s.colaboradores);
  const contagem = useOrganogramaStore((s) => s.contagemPorTime());

  return (
    <>
      <Helmet>
        <title>Painel | Organograma do Condomínio</title>
      </Helmet>
      <div className="page-intro">
        <h2>Painel do condomínio</h2>
        <p>
          Total de colaboradores: <strong>{colaboradores.length}</strong>
        </p>
      </div>
      <DashboardChart dados={contagem} />
      <ul className="painel-lista">
        {contagem.map((item) => (
          <li key={item.nome}>
            <span className="painel-dot" style={{ background: item.cor }} />
            {item.nome}: <strong>{item.total}</strong>
          </li>
        ))}
      </ul>
    </>
  );
}
