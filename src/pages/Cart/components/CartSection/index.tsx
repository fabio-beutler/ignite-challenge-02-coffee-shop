import { CoffeeMenu } from '../../../../constants/menu';
import { CoffeeItem } from '../CoffeeItem';
import { CoffeeList } from '../CoffeeList';
import { CoffeeSummary } from '../CoffeeSummary';
import { CartContainer, Container } from './styles';

export function CartSection() {
  return (
    <Container>
      <h2>Cafés selecionados</h2>
      <CartContainer>
        <CoffeeList>
          {CoffeeMenu.slice(1, 3).map((coffee) => (
            <CoffeeItem key={coffee.id} coffee={coffee} />
          ))}
        </CoffeeList>
        <CoffeeSummary />
      </CartContainer>
    </Container>
  );
}
