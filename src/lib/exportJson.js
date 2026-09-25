/**
 * Exporta o organograma como arquivo JSON (download local — sem backend).
 */
export function exportOrganogramaJson({ colaboradores, times, nomeArquivo }) {
  const payload = {
    exportadoEm: new Date().toISOString(),
    versao: '2.0.0',
    times,
    colaboradores,
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], {
    type: 'application/json;charset=utf-8',
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = nomeArquivo || `organograma-condominio-${Date.now()}.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}
