import userEvent from '@testing-library/user-event';
import { renderWithTheme, screen } from '@/test-utils/renderWithTheme';
import Input from './Input';

describe('Input', () => {
  it('associates label with the input field', () => {
    renderWithTheme(
      <Input
        id="busca"
        label="Buscar profissional"
        placeholder="Digite um nome"
      />,
    );

    expect(screen.getByLabelText('Buscar profissional')).toBeInTheDocument();
  });

  it('renders helper text', () => {
    renderWithTheme(
      <Input
        id="busca"
        label="Buscar profissional"
        helperText="Use nome, cidade ou especialidade"
      />,
    );

    expect(
      screen.getByText('Use nome, cidade ou especialidade'),
    ).toBeInTheDocument();
  });

  it('shows error state and message', () => {
    renderWithTheme(
      <Input
        id="busca"
        label="Buscar profissional"
        error="Campo obrigatório"
      />,
    );

    expect(screen.getByText('Campo obrigatório')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true');
  });

  it('clears the value when the clear button is clicked', async () => {
    const user = userEvent.setup();
    const onClear = jest.fn();

    renderWithTheme(
      <Input
        id="busca"
        label="Buscar profissional"
        value="Marina"
        clearable
        onClear={onClear}
        readOnly
      />,
    );

    await user.click(screen.getByRole('button', { name: 'Limpar texto' }));
    expect(onClear).toHaveBeenCalledTimes(1);
  });
});
