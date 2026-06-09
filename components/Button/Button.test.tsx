import userEvent from '@testing-library/user-event';
import { renderWithTheme, screen } from '@/test-utils/renderWithTheme';
import Button from './Button';

describe('Button', () => {
  it('renders as a button and fires onClick', async () => {
    const user = userEvent.setup();
    const onClick = jest.fn();

    renderWithTheme(<Button onClick={onClick}>Buscar</Button>);

    const button = screen.getByRole('button', { name: 'Buscar' });
    expect(button).toBeInTheDocument();

    await user.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('renders as a navigation link when href is provided', () => {
    renderWithTheme(
      <Button href="/profissionais">Encontrar profissionais</Button>,
    );

    const link = screen.getByRole('link', { name: 'Encontrar profissionais' });
    expect(link).toHaveAttribute('href', '/profissionais');
  });

  it('communicates loading state and blocks clicks', async () => {
    const user = userEvent.setup();
    const onClick = jest.fn();

    renderWithTheme(
      <Button onClick={onClick} isLoading>
        Salvar
      </Button>,
    );

    const button = screen.getByRole('button', { name: 'Salvar' });
    expect(button).toHaveAttribute('aria-busy', 'true');
    expect(button).toBeDisabled();

    await user.click(button);
    expect(onClick).not.toHaveBeenCalled();
  });
});
