import userEvent from '@testing-library/user-event';
import { renderWithTheme, screen } from '@/test-utils/renderWithTheme';
import Select from './Select';

const options = [
  { label: 'Psicologia', value: 'Psicologia' },
  { label: 'Psiquiatria', value: 'Psiquiatria' },
];

describe('Select', () => {
  it('associates label with the select field', () => {
    renderWithTheme(
      <Select
        id="especialidade"
        label="Especialidade"
        options={options}
        placeholder="Todas as especialidades"
      />,
    );

    expect(screen.getByLabelText('Especialidade')).toBeInTheDocument();
  });

  it('renders helper text', () => {
    renderWithTheme(
      <Select
        id="especialidade"
        label="Especialidade"
        options={options}
        helperText="Filtre por área de atuação"
      />,
    );

    const select = screen.getByRole('combobox', { name: 'Especialidade' });

    expect(screen.getByText('Filtre por área de atuação')).toBeInTheDocument();
    expect(select).toHaveAttribute('aria-describedby', 'especialidade-helper');
  });

  it('shows error state and message', () => {
    renderWithTheme(
      <Select
        id="especialidade"
        label="Especialidade"
        options={options}
        error="Selecione uma especialidade"
      />,
    );

    const select = screen.getByRole('combobox', { name: 'Especialidade' });

    expect(screen.getByText('Selecione uma especialidade')).toBeInTheDocument();
    expect(select).toHaveAttribute('aria-invalid', 'true');
    expect(select).toHaveAttribute('aria-describedby', 'especialidade-helper');
  });

  it('renders placeholder and options', () => {
    renderWithTheme(
      <Select
        id="especialidade"
        label="Especialidade"
        options={options}
        placeholder="Todas as especialidades"
      />,
    );

    expect(
      screen.getByRole('option', { name: 'Todas as especialidades' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('option', { name: 'Psicologia' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('option', { name: 'Psiquiatria' }),
    ).toBeInTheDocument();
  });

  it('fires onChange when an option is selected', async () => {
    const user = userEvent.setup();
    const onChange = jest.fn();

    renderWithTheme(
      <Select
        id="especialidade"
        label="Especialidade"
        options={options}
        placeholder="Todas as especialidades"
        onChange={onChange}
      />,
    );

    await user.selectOptions(
      screen.getByRole('combobox', { name: 'Especialidade' }),
      'Psiquiatria',
    );

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(screen.getByRole('combobox', { name: 'Especialidade' })).toHaveValue(
      'Psiquiatria',
    );
  });

  it('renders disabled state', () => {
    renderWithTheme(
      <Select
        id="especialidade"
        label="Especialidade"
        options={options}
        disabled
      />,
    );

    expect(
      screen.getByRole('combobox', { name: 'Especialidade' }),
    ).toBeDisabled();
  });
});
