import { useNavigate } from 'react-router-dom';
import { Container, Row } from './styles';

export function CoffeeSummary() {
  const navigate = useNavigate();
  function handleConfirmOrder() {
    navigate('/success');
  }

  return (
    <Container>
      <Row>
        <p>Total de itens</p>
        <span>R$ 29,70</span>
      </Row>
      <Row>
        <p>Entrega</p>
        <span>R$ 3,50</span>
      </Row>
      <Row>
        <p>Total</p>
        <span>R$ 33,20</span>
      </Row>

      <button type='button' onClick={handleConfirmOrder}>
        Confirmar pedido
      </button>
    </Container>
  );
}
