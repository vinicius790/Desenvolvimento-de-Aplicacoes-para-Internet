import PropTypes from 'prop-types';
import { Search } from 'lucide-react';
import ptBR from '../../i18n/ptBR';
import './Busca.css';

export function Busca({ valor, aoAlterado }) {
  return (
    <div className="busca">
      <Search size={18} aria-hidden="true" />
      <label htmlFor="busca-nome" className="sr-only">
        {ptBR.form.buscar}
      </label>
      <input
        id="busca-nome"
        type="search"
        placeholder={ptBR.form.buscar}
        value={valor}
        onChange={(e) => aoAlterado(e.target.value)}
      />
    </div>
  );
}

Busca.propTypes = {
  valor: PropTypes.string.isRequired,
  aoAlterado: PropTypes.func.isRequired,
};

export default Busca;
