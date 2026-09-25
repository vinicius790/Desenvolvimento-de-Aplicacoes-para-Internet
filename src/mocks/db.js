import timesIniciais from '../data/times';

/** DB em memória da API mock (reinicia a cada refresh da página do worker). */
let colaboradores = [];
let times = [...timesIniciais];

export const mockDb = {
  getColaboradores: () => colaboradores,
  setColaboradores: (list) => {
    colaboradores = list;
  },
  addColaborador: (c) => {
    colaboradores = [...colaboradores, c];
    return c;
  },
  removeColaborador: (id) => {
    const before = colaboradores.length;
    colaboradores = colaboradores.filter((c) => c.id !== id);
    return before !== colaboradores.length;
  },
  getTimes: () => times,
  setTimes: (list) => {
    times = list;
  },
  reset: () => {
    colaboradores = [];
    times = [...timesIniciais];
  },
};
