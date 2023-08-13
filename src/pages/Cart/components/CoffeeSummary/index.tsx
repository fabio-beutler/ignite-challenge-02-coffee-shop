import { useCartContext } from "@/hooks/useCartContext";

import { Container, Row } from "./styles";

export function CoffeeSummary() {
  const { cart } = useCartContext();

  const totalPrice = cart.reduce((acc, product) => {
    return acc + product.price * product.amount;
  }, 0);

  return (
    <Container>
      <Row>
        <p>Total de itens</p>
        <span>R$ {totalPrice.toFixed(2).toString().replace(".", ",")}</span>
      </Row>
      <Row>
        <p>Entrega</p>
        <span>R$ 3,50</span>
      </Row>
      <Row>
        <p>Total</p>
        <span>
          R$ {(totalPrice + 3.5).toFixed(2).toString().replace(".", ",")}
        </span>
      </Row>

      <button type="submit">Confirmar pedido</button>
    </Container>
  );
}
