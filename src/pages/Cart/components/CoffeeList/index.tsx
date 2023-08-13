import { ReactNode } from "react";

import { List } from "./styles";

interface CoffeeListProps {
  children: ReactNode;
}

export function CoffeeList({ children }: CoffeeListProps) {
  return <List>{children}</List>;
}
