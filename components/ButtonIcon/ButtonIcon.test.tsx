import userEvent from '@testing-library/user-event';
import { renderWithTheme, screen } from '@/test-utils/renderWithTheme';
import ButtonIcon from './ButtonIcon';

describe('ButtonIcon', () => {
  it('renders an accessible icon button', async () => {
    const user = userEvent.setup();
    const onClick = jest.fn();

    renderWithTheme(
      <ButtonIcon aria-label="Favoritar" onClick={onClick}>
        <svg aria-hidden="true" />
      </ButtonIcon>,
    );

    const button = screen.getByRole('button', { name: 'Favoritar' });
    await user.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('supports toggle state via aria-pressed', async () => {
    const user = userEvent.setup();

    renderWithTheme(
      <ButtonIcon
        aria-label="Favoritar"
        aria-pressed={false}
        variant="secondary"
      >
        <svg aria-hidden="true" />
      </ButtonIcon>,
    );

    const button = screen.getByRole('button', { name: 'Favoritar' });
    expect(button).toHaveAttribute('aria-pressed', 'false');

    await user.click(button);
  });

  it('renders disabled state', () => {
    renderWithTheme(
      <ButtonIcon aria-label="Indisponível" disabled variant="primary">
        <svg aria-hidden="true" />
      </ButtonIcon>,
    );

    expect(screen.getByRole('button', { name: 'Indisponível' })).toBeDisabled();
  });
});
