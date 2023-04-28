import { List } from './styles';

interface CoffeeListProps {
  children: React.ReactNode;
}

export function CoffeeList({ children }: CoffeeListProps) {
  return <List>{children}</List>;
}
