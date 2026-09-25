import { render, screen } from '@testing-library/react';
import App from './App';

// Limpa persistência entre testes
beforeEach(() => {
  window.localStorage.clear();
});

describe('App', () => {
  test('mostra empty state quando não há colaboradores', async () => {
    render(<App />);
    expect(await screen.findByText(/nenhum colaborador cadastrado/i)).toBeInTheDocument();
  });

  test('navegação principal está acessível', async () => {
    render(<App />);
    expect(screen.getByRole('navigation', { name: /navegação principal/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /organograma/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /cadastro/i })).toBeInTheDocument();
  });
});
