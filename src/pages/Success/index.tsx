import { CurrencyDollar, MapPin, Timer } from 'phosphor-react';
import illustration from '../../assets/illustration.svg';
import { Container, Content, Info, Item, Text } from './styles';

export function Success() {
  return (
    <Container>
      <h1>Uhu! Pedido confirmado</h1>
      <p>Agora é só aguardar que logo o café chegará até você</p>

      <Content>
        <Info>
          <Item>
            <span>
              <MapPin />
            </span>
            <Text>
              <p>
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
              </p>
              <p>Farrrapos - Porto Alegre, RS</p>
            </Text>
          </Item>
          <Item>
            <span>
              <Timer />
            </span>
            <Text>
              <p>Previsão de entrega</p>
              <p>
                <strong>20 min - 30 min</strong>
              </p>
            </Text>
          </Item>
          <Item>
            <span>
              <CurrencyDollar />
            </span>
            <Text>
              <p>Pagamento da entrega</p>
              <p>
                <strong>Cartão de Crédito</strong>
              </p>
            </Text>
          </Item>
        </Info>
        <img
          src={illustration}
          alt='Motoboy pilotando uma motocicleta roxa com uma caixa de café no baú da moto'
        />
      </Content>
    </Container>
  );
}
