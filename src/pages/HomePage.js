import { Helmet } from 'react-helmet-async';
import { toast } from 'sonner';
import { Download, Users } from 'lucide-react';
import Banner from '../components/Banner';
import Busca from '../components/Busca';
import Time from '../components/Time';
import useOrganogramaStore from '../store/useOrganogramaStore';
import { exportOrganogramaJson } from '../lib/exportJson';
import ptBR from '../i18n/ptBR';
import './pages.css';

export default function HomePage() {
  const filtro = useOrganogramaStore((s) => s.filtro);
  const setFiltro = useOrganogramaStore((s) => s.setFiltro);
  const times = useOrganogramaStore((s) => s.times);
  const colaboradores = useOrganogramaStore((s) => s.colaboradores);
  const removerColaborador = useOrganogramaStore((s) => s.removerColaborador);
  const atualizarCorTime = useOrganogramaStore((s) => s.atualizarCorTime);

  const filtrados = (() => {
    const q = filtro.trim().toLowerCase();
    if (!q) return colaboradores;
    return colaboradores.filter((c) => c.nome.toLowerCase().includes(q));
  })();

  const handleDelete = (id) => {
    removerColaborador(id);
    toast.success(ptBR.toast.removido);
  };

  const handleExport = () => {
    exportOrganogramaJson({ colaboradores, times });
    toast.success(ptBR.toast.exportado);
  };

  return (
    <>
      <Helmet>
        <title>Organograma | Organograma do Condomínio</title>
      </Helmet>
      <Banner />
      <div className="page-toolbar">
        <Busca valor={filtro} aoAlterado={setFiltro} />
        <button type="button" className="btn-export" onClick={handleExport}>
          <Download size={16} aria-hidden="true" /> Exportar JSON
        </button>
      </div>

      {filtrados.length === 0 ? (
        <div className="empty-state" role="status">
          <Users size={40} aria-hidden="true" />
          <h2>{ptBR.empty.titulo}</h2>
          <p>{ptBR.empty.texto}</p>
        </div>
      ) : (
        times.map((time) => (
          <Time
            key={time.nome}
            time={time}
            colaboradores={filtrados.filter((c) => c.time === time.nome)}
            aoDeletar={handleDelete}
            aoMudarCor={atualizarCorTime}
          />
        ))
      )}
    </>
  );
}
