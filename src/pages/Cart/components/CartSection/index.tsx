import { CoffeeMenu } from '../../../../constants/menu';
import { useCartContext } from '../../../../hooks/useCartContext';
import { CoffeeItem } from '../CoffeeItem';
import { CoffeeList } from '../CoffeeList';
import { CoffeeSummary } from '../CoffeeSummary';
import { CartContainer, Container } from './styles';

export function CartSection() {
  const { cart } = useCartContext();
  return (
    <Container>
      <h2>Cafés selecionados</h2>
      <CartContainer>
        <CoffeeList>
          {cart.map((coffee) => (
            <CoffeeItem key={coffee.id} coffee={coffee} />
          ))}
        </CoffeeList>
        <CoffeeSummary />
      </CartContainer>
    </Container>
  );
}
