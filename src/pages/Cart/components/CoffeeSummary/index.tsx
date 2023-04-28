import { useNavigate } from 'react-router-dom';
import { Container, Row } from './styles';
import { useCartContext } from '../../../../hooks/useCartContext';

export function CoffeeSummary() {
  const { cart } = useCartContext();
  const navigate = useNavigate();

  const totalPrice = cart.reduce((acc, product) => {
    return acc + product.price * product.amount;
  }, 0);

  function handleConfirmOrder() {
    navigate('/success');
  }

  return (
    <Container>
      <Row>
        <p>Total de itens</p>
        <span>R$ {totalPrice.toFixed(2).toString().replace('.', ',')}</span>
      </Row>
      <Row>
        <p>Entrega</p>
        <span>R$ 3,50</span>
      </Row>
      <Row>
        <p>Total</p>
        <span>
          R$ {(totalPrice + 3.5).toFixed(2).toString().replace('.', ',')}
        </span>
      </Row>

      <button type='button' onClick={handleConfirmOrder}>
        Confirmar pedido
      </button>
    </Container>
  );
}
