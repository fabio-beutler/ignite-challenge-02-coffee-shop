import { Container, List } from './styles';

export function CoffeeList({ children }: { children: React.ReactNode }) {
  return (
    <Container>
      <h2>Nossos cafés</h2>

      <List>{children}</List>
    </Container>
  );
}
