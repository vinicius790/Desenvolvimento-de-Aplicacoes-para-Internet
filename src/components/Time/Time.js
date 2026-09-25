import PropTypes from 'prop-types';
import Colaborador from '../Colaborador';
import CampoCor from '../CampoCor';
import './Time.css';

export function Time({ time, colaboradores, aoDeletar, aoMudarCor }) {
  if (!colaboradores.length) return null;

  return (
    <section
      className="time"
      style={{ backgroundColor: time.corSecundaria || `${time.corPrimaria}22` }}
      aria-labelledby={`time-${time.nome}`}
    >
      <div className="time__topo">
        <h3 id={`time-${time.nome}`} style={{ borderColor: time.corPrimaria }}>
          {time.nome}
        </h3>
        {aoMudarCor && (
          <CampoCor
            label={`Cor do time ${time.nome}`}
            valor={time.corPrimaria}
            aoAlterado={(cor) => aoMudarCor(time.nome, cor)}
          />
        )}
      </div>
      <div className="time__colaboradores">
        {colaboradores.map((colab) => (
          <Colaborador
            key={colab.id}
            colaborador={colab}
            corDeFundo={time.corPrimaria}
            aoDeletar={aoDeletar}
          />
        ))}
      </div>
    </section>
  );
}

Time.propTypes = {
  time: PropTypes.shape({
    nome: PropTypes.string.isRequired,
    corPrimaria: PropTypes.string.isRequired,
    corSecundaria: PropTypes.string,
  }).isRequired,
  colaboradores: PropTypes.arrayOf(PropTypes.object).isRequired,
  aoDeletar: PropTypes.func.isRequired,
  aoMudarCor: PropTypes.func,
};

export default Time;
