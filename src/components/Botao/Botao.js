import './Botao.css';

/**
 * Botão de ação do formulário.
 */
export function Botao({ children, texto, tipo = 'submit', disabled = false, onClick }) {
  return (
    <button
      type={tipo}
      className="botao"
      disabled={disabled}
      onClick={onClick}
    >
      {children ?? texto}
    </button>
  );
}

export default Botao;
