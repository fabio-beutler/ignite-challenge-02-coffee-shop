import { CartInput } from '../../../../components/CartInput';
import type { Coffee } from '../../../../constants/menu';
import { CartButton } from '../CartButton';
import { Badges, Cart, Container, Price, Text } from './styles';

interface CoffeeItemProps {
  coffee: Coffee;
}

export function CoffeeItem({ coffee }: CoffeeItemProps) {
  return (
    <Container>
      <img
        src={`/coffees/${coffee.image}.png`}
        alt={`Xícara com ${coffee.title}`}
      />
      <Badges>
        {coffee.badges.map((badge) => (
          <span key={badge}>{badge}</span>
        ))}
      </Badges>
      <Text>
        <h3>{coffee.title}</h3>
        <p>{coffee.description}</p>
      </Text>
      <Price>
        <span>
          R$
          <strong>
            {coffee.price.toFixed(2).toString().replace('.', ',')}
          </strong>
        </span>
        <Cart>
          <CartInput />
          <CartButton />
        </Cart>
      </Price>
    </Container>
  );
}
