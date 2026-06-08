import { renderWithTheme, screen } from '@/test-utils/renderWithTheme';
import { Container } from './Container.styled';

describe('Container', () => {
  it('renders child content', () => {
    renderWithTheme(<Container>Conteúdo centralizado</Container>);

    expect(screen.getByText('Conteúdo centralizado')).toBeInTheDocument();
  });
});
