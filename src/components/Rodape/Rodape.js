import { Building2 } from 'lucide-react';
import './Rodape.css';

export function Rodape() {
  return (
    <footer className="rodape" role="contentinfo">
      <Building2 size={22} aria-hidden="true" />
      <p>
        Organograma do Condomínio — curso <strong>Desenvolvimento de Aplicações para Internet</strong>
      </p>
      <p className="rodape__brand">Branding Tambaqui · React 18 · MIT</p>
    </footer>
  );
}

export default Rodape;
