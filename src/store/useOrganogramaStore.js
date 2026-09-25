import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import timesIniciais from '../data/times';
import { generateId } from '../utils/validation';

/**
 * Store Zustand com persistência localStorage.
 * Senha/código de acesso NÃO fica nos colaboradores — só em authBlob.
 */
const useOrganogramaStore = create(
  persist(
    (set, get) => ({
      colaboradores: [],
      times: timesIniciais,
      filtro: '',
      authBlob: {}, // { [colaboradorId]: hashDemo } — demo local only

      setFiltro: (filtro) => set({ filtro }),

      setTimes: (times) => set({ times }),

      atualizarCorTime: (nome, corPrimaria) =>
        set((state) => ({
          times: state.times.map((t) =>
            t.nome === nome
              ? {
                  ...t,
                  corPrimaria,
                  corSecundaria: corPrimaria + '33',
                }
              : t
          ),
        })),

      adicionarColaborador: (dados, codigoHash = '') => {
        const id = generateId();
        const colaborador = {
          id,
          nome: dados.nome.trim(),
          email: dados.email.trim(),
          telefone: dados.telefone,
          time: dados.time,
          observacoes: dados.observacoes || '',
          imagem: dados.imagem || '',
          criadoEm: new Date().toISOString(),
          // NUNCA incluir codigoAcesso / senha no card
        };
        set((state) => ({
          colaboradores: [...state.colaboradores, colaborador],
          authBlob: codigoHash
            ? { ...state.authBlob, [id]: codigoHash }
            : state.authBlob,
        }));
        return colaborador;
      },

      removerColaborador: (id) =>
        set((state) => {
          const { [id]: _removed, ...restAuth } = state.authBlob;
          return {
            colaboradores: state.colaboradores.filter((c) => c.id !== id),
            authBlob: restAuth,
          };
        }),

      colaboradoresFiltrados: () => {
        const { colaboradores, filtro } = get();
        const q = filtro.trim().toLowerCase();
        if (!q) return colaboradores;
        return colaboradores.filter((c) => c.nome.toLowerCase().includes(q));
      },

      contagemPorTime: () => {
        const { colaboradores, times } = get();
        return times.map((t) => ({
          nome: t.nome,
          cor: t.corPrimaria,
          total: colaboradores.filter((c) => c.time === t.nome).length,
        }));
      },
    }),
    {
      name: 'organograma-condominio-v2',
      partialize: (state) => ({
        colaboradores: state.colaboradores,
        times: state.times,
        authBlob: state.authBlob,
      }),
    }
  )
);

export default useOrganogramaStore;
