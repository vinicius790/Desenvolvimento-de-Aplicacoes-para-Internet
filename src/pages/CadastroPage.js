import { Helmet } from 'react-helmet-async';
import { toast } from 'sonner';
import Formulario from '../components/Formulario';
import useOrganogramaStore from '../store/useOrganogramaStore';
import { criarColaborador } from '../api/colaboradoresApi';
import ptBR from '../i18n/ptBR';
import './pages.css';

export default function CadastroPage() {
  const times = useOrganogramaStore((s) => s.times);
  const adicionarColaborador = useOrganogramaStore((s) => s.adicionarColaborador);

  const handleCadastro = async (dados, codigoHash) => {
    // Sempre persiste localmente (Zustand + localStorage)
    const local = adicionarColaborador(dados, codigoHash);
    // Tenta espelhar na API mock (MSW) — se falhar, só avisa
    try {
      await criarColaborador({ ...dados, id: local.id });
    } catch {
      toast.message(ptBR.toast.erroApi);
    }
  };

  return (
    <>
      <Helmet>
        <title>Cadastro | Organograma do Condomínio</title>
      </Helmet>
      <div className="page-intro">
        <h2>Novo cadastro</h2>
        <p>Os dados ficam no navegador (localStorage). Código de acesso nunca aparece nos cards.</p>
      </div>
      <Formulario
        times={times.map((t) => t.nome)}
        aoColaboradorCadastrado={handleCadastro}
      />
    </>
  );
}
