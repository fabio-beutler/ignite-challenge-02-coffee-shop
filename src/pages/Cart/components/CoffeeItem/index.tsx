import { Trash } from 'phosphor-react';
import { CartInput } from '../../../../components/CartInput';
import type { Coffee } from '../../../../constants/menu';
import { Buttons, Container, Content, RemoveButton, Text } from './styles';

interface CoffeeItemProps {
  coffee: Coffee;
}

export function CoffeeItem({ coffee }: CoffeeItemProps) {
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
            <CartInput />
            <RemoveButton type='button'>
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
        {coffee.price.toFixed(2).toString().replace('.', ',')}
      </span>
    </Container>
  );
}
