import { render, screen } from '@testing-library/react';
import ListaSuspensa from './ListaSuspensa';

describe('ListaSuspensa', () => {
  test('renderiza opções com keys e label acessível', () => {
    render(
      <ListaSuspensa
        label="Tipo"
        itens={['Síndico', 'Condômino', 'Porteiro']}
        valor=""
        aoAlterado={() => {}}
      />
    );
    expect(screen.getByLabelText(/tipo/i)).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'Síndico' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'Condômino' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'Porteiro' })).toBeInTheDocument();
  });
});
