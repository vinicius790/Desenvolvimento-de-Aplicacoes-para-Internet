import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Formulario from './Formulario';

const times = ['Síndico', 'Condômino'];

describe('Formulario', () => {
  test('submete e chama aoColaboradorCadastrado com dados válidos', async () => {
    const onCadastro = jest.fn().mockResolvedValue(undefined);

    render(<Formulario times={times} aoColaboradorCadastrado={onCadastro} />);

    await userEvent.type(screen.getByLabelText(/nome/i), 'Ana Paula');
    await userEvent.type(screen.getByLabelText(/^e-mail/i), 'ana@condo.com');
    await userEvent.type(screen.getByLabelText(/telefone/i), '11987654321');
    await userEvent.selectOptions(screen.getByLabelText(/tipo \/ time/i), 'Condômino');

    await userEvent.click(screen.getByRole('button', { name: /criar cadastro/i }));

    await waitFor(() => expect(onCadastro).toHaveBeenCalledTimes(1));
    const [payload] = onCadastro.mock.calls[0];
    expect(payload.nome).toBe('Ana Paula');
    expect(payload.email).toBe('ana@condo.com');
    expect(payload.time).toBe('Condômino');
    expect(payload).not.toHaveProperty('codigoAcesso');
  });
});
