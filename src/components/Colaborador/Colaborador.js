import PropTypes from 'prop-types';
import { format, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { Mail, Phone, Trash2, MessageSquare } from 'lucide-react';
import { cn } from '../../lib/cn';
import './Colaborador.css';

const AVATAR_FALLBACK =
  'https://ui-avatars.com/api/?background=6278F7&color=fff&name=';

/**
 * Card de colaborador — NUNCA exibe senha/código de acesso.
 */
export function Colaborador({ colaborador, corDeFundo, aoDeletar }) {
  const { id, nome, email, telefone, observacoes, imagem, criadoEm } = colaborador;
  const avatar = imagem || `${AVATAR_FALLBACK}${encodeURIComponent(nome)}`;

  let dataLabel = '';
  if (criadoEm) {
    try {
      dataLabel = format(parseISO(criadoEm), "dd/MM/yyyy 'às' HH:mm", { locale: ptBR });
    } catch {
      dataLabel = '';
    }
  }

  return (
    <article className={cn('colaborador')} aria-label={`Colaborador ${nome}`}>
      <div className="colaborador__cabecalho" style={{ backgroundColor: corDeFundo }}>
        <img src={avatar} alt={`Foto de ${nome}`} />
      </div>
      <div className="colaborador__rodape">
        <h4>{nome}</h4>
        <p className="colaborador__linha">
          <Mail size={14} aria-hidden="true" /> {email}
        </p>
        <p className="colaborador__linha">
          <Phone size={14} aria-hidden="true" /> {telefone}
        </p>
        {observacoes ? (
          <p className="colaborador__obs">
            <MessageSquare size={14} aria-hidden="true" /> {observacoes}
          </p>
        ) : null}
        {dataLabel ? (
          <time className="colaborador__data" dateTime={criadoEm}>
            Cadastrado em {dataLabel}
          </time>
        ) : null}
        <button
          type="button"
          className="colaborador__delete"
          onClick={() => aoDeletar(id)}
          aria-label={`Remover ${nome}`}
          title="Remover"
        >
          <Trash2 size={16} aria-hidden="true" />
        </button>
      </div>
    </article>
  );
}

Colaborador.propTypes = {
  colaborador: PropTypes.shape({
    id: PropTypes.string.isRequired,
    nome: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    telefone: PropTypes.string.isRequired,
    observacoes: PropTypes.string,
    imagem: PropTypes.string,
    criadoEm: PropTypes.string,
  }).isRequired,
  corDeFundo: PropTypes.string.isRequired,
  aoDeletar: PropTypes.func.isRequired,
};

export default Colaborador;
