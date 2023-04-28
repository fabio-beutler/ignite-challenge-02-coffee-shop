import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react';
import {
  Container,
  Form,
  FormContainer,
  Header,
  Payment,
  PaymentContainer,
} from './styles';
import { Input } from '../../../../components/Input';

export function FormSection() {
  return (
    <Container>
      <h1>Complete seu pedido</h1>
      <FormContainer>
        <Header color='yellow-dark'>
          <span>
            <MapPinLine size={22} />
          </span>
          <div>
            <h3>Endereço de Entrega</h3>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </div>
        </Header>

        <Form>
          <Input placeholder='CEP' />
          <Input placeholder='Rua' />
          <Input placeholder='Número' />
          <Input placeholder='Complemento' optional />
          <Input placeholder='Bairro' />
          <Input placeholder='Cidade' />
          <Input placeholder='UF' />
        </Form>
      </FormContainer>
      <PaymentContainer>
        <Header color='purple'>
          <span>
            <CurrencyDollar size={22} />
          </span>
          <div>
            <h3>Pagamento</h3>
            <p>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
          </div>
        </Header>
        <Payment>
          <label htmlFor='credit'>
            <span>
              <CreditCard />
            </span>
            Cartão de Crédito
            <input type='radio' id='credit' name='payment-option' />
          </label>
          <label htmlFor='debit'>
            <span>
              <Bank />
            </span>
            Cartão de Débito
            <input type='radio' id='debit' name='payment-option' />
          </label>
          <label htmlFor='cash'>
            <span>
              <Money />
            </span>
            Dinheiro
            <input type='radio' id='cash' name='payment-option' />
          </label>
        </Payment>
      </PaymentContainer>
    </Container>
  );
}
