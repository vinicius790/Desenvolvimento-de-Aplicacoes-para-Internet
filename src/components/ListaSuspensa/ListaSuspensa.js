import './ListaSuspensa.css';

/**
 * Select controlado com lista de opções (times / tipos).
 */
export function ListaSuspensa({
  label,
  itens,
  valor,
  aoAlterado,
  obrigatorio = false,
  id,
  erro,
}) {
  const fieldId = id || `lista-${label?.toLowerCase().replace(/\s+/g, '-')}`;

  return (
    <div className={`lista-suspensa${erro ? ' lista-suspensa--erro' : ''}`}>
      <label htmlFor={fieldId}>
        {label}
        {obrigatorio && <span className="lista-suspensa__req" aria-hidden="true"> *</span>}
      </label>
      <select
        id={fieldId}
        value={valor}
        onChange={(e) => aoAlterado(e.target.value)}
        required={obrigatorio}
        aria-required={obrigatorio}
        aria-invalid={Boolean(erro)}
        aria-describedby={erro ? `${fieldId}-erro` : undefined}
      >
        <option value="">Selecione…</option>
        {itens.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
      {erro && (
        <span id={`${fieldId}-erro`} className="lista-suspensa__erro" role="alert">
          {erro}
        </span>
      )}
    </div>
  );
}

export default ListaSuspensa;
