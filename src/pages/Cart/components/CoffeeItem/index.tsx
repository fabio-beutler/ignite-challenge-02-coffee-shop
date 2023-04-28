import { Trash } from 'phosphor-react';
import { CartInput } from '../../../../components/CartInput';
import { Buttons, Container, Content, RemoveButton, Text } from './styles';
import { useCartContext } from '../../../../hooks/useCartContext';
import { Product } from '../../../../contexts/CartContext';

interface CoffeeItemProps {
  coffee: Product;
}

export function CoffeeItem({ coffee }: CoffeeItemProps) {
  const { cart, removeProduct } = useCartContext();

  const storedValue = cart.find((product) => product.id === coffee.id)?.amount;

  return (
    <Container>
      <Content>
        <img
          src={`/coffees/${coffee.image}.png`}
          alt={`Xícara de ${coffee.title}`}
        />
        <Text>
          <h4>{coffee.title}</h4>
          <Buttons>
            <CartInput coffeeId={coffee.id} storedValue={storedValue} />
            <RemoveButton
              type='button'
              onClick={() => removeProduct(coffee.id)}
            >
              <span>
                <Trash size={16} />
              </span>
              Remover
            </RemoveButton>
          </Buttons>
        </Text>
      </Content>
      <span>
        <span style={{ marginRight: '4px' }}>R$</span>
        {(coffee.price * coffee.amount).toFixed(2).toString().replace('.', ',')}
      </span>
    </Container>
  );
}
