import { ReactNode } from "react";

import { Container, List } from "./styles";

export function CoffeeList({ children }: { children: ReactNode }) {
  return (
    <Container>
      <h2>Nossos cafés</h2>

      <List>{children}</List>
    </Container>
  );
}
