import PropTypes from 'prop-types';
import './CampoCor.css';

export function CampoCor({ label, valor, aoAlterado }) {
  const id = `cor-${label?.replace(/\s+/g, '-').toLowerCase()}`;
  return (
    <div className="campo-cor">
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <input
        id={id}
        type="color"
        value={valor}
        onChange={(e) => aoAlterado(e.target.value)}
        title={label}
        aria-label={label}
      />
    </div>
  );
}

CampoCor.propTypes = {
  label: PropTypes.string.isRequired,
  valor: PropTypes.string.isRequired,
  aoAlterado: PropTypes.func.isRequired,
};

export default CampoCor;
