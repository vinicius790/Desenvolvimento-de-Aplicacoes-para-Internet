import PropTypes from 'prop-types';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Cell,
} from 'recharts';
import './DashboardChart.css';

export function DashboardChart({ dados }) {
  if (!dados?.length) {
    return <p className="dashboard-chart__vazio">Sem dados para o gráfico.</p>;
  }

  return (
    <div className="dashboard-chart" role="img" aria-label="Gráfico de colaboradores por time">
      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={dados} margin={{ top: 8, right: 16, left: 0, bottom: 8 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="nome" tick={{ fontSize: 12 }} />
          <YAxis allowDecimals={false} width={32} />
          <Tooltip />
          <Bar dataKey="total" name="Colaboradores" radius={[6, 6, 0, 0]}>
            {dados.map((entry) => (
              <Cell key={entry.nome} fill={entry.cor} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

DashboardChart.propTypes = {
  dados: PropTypes.arrayOf(
    PropTypes.shape({
      nome: PropTypes.string,
      total: PropTypes.number,
      cor: PropTypes.string,
    })
  ).isRequired,
};

export default DashboardChart;
