import './CampoTexto.css';

/**
 * Campo de texto controlado (text, email, tel, password, etc.).
 */
export function CampoTexto({
  label,
  placeholder,
  valor,
  aoAlterado,
  obrigatorio = false,
  tipo = 'text',
  id,
  erro,
  maxLength,
}) {
  const fieldId = id || `campo-${label?.toLowerCase().replace(/\s+/g, '-')}`;

  return (
    <div className={`campo-texto${erro ? ' campo-texto--erro' : ''}`}>
      <label htmlFor={fieldId}>
        {label}
        {obrigatorio && <span className="campo-texto__req" aria-hidden="true"> *</span>}
      </label>
      <input
        id={fieldId}
        type={tipo}
        value={valor}
        onChange={(e) => aoAlterado(e.target.value)}
        placeholder={placeholder}
        required={obrigatorio}
        aria-required={obrigatorio}
        aria-invalid={Boolean(erro)}
        aria-describedby={erro ? `${fieldId}-erro` : undefined}
        maxLength={maxLength}
        autoComplete={tipo === 'email' ? 'email' : tipo === 'tel' ? 'tel' : 'off'}
      />
      {erro && (
        <span id={`${fieldId}-erro`} className="campo-texto__erro" role="alert">
          {erro}
        </span>
      )}
    </div>
  );
}

export default CampoTexto;
