import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "phosphor-react";
import { useFormContext } from "react-hook-form";

import { Input } from "@/components/Input";

import { NewOrderFormData } from "../..";
import {
  Container,
  Form,
  FormContainer,
  Header,
  Payment,
  PaymentContainer,
} from "./styles";

export function FormSection() {
  const {
    register,
    formState: { errors },
  } = useFormContext<NewOrderFormData>();
  return (
    <Container>
      <h1>Complete seu pedido</h1>
      <FormContainer>
        <Header color="yellow-dark">
          <span>
            <MapPinLine size={22} />
          </span>
          <div>
            <h3>Endereço de Entrega</h3>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </div>
        </Header>

        <Form>
          <Input
            placeholder="CEP"
            {...register("cep")}
            error={errors.cep?.message}
          />
          <Input
            placeholder="Rua"
            {...register("street")}
            error={errors.street?.message}
          />
          <Input
            placeholder="Número"
            {...register("number")}
            error={errors.number?.message}
          />
          <Input
            placeholder="Complemento"
            {...register("complement")}
            error={errors.complement?.message}
            optional
          />
          <Input
            placeholder="Bairro"
            {...register("district")}
            error={errors.district?.message}
          />
          <Input
            placeholder="Cidade"
            {...register("city")}
            error={errors.city?.message}
          />
          <Input
            placeholder="UF"
            {...register("uf")}
            error={errors.uf?.message}
          />
        </Form>
      </FormContainer>
      <PaymentContainer>
        <Header color="purple">
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
        {errors.paymentMethod && <p>{errors.paymentMethod.message}</p>}
        <Payment>
          <label htmlFor="credit">
            <span>
              <CreditCard />
            </span>
            Cartão de Crédito
            <input
              type="radio"
              id="credit"
              value="credit"
              {...register("paymentMethod")}
            />
          </label>
          <label htmlFor="debit">
            <span>
              <Bank />
            </span>
            Cartão de Débito
            <input
              type="radio"
              id="debit"
              value="debit"
              {...register("paymentMethod")}
            />
          </label>
          <label htmlFor="cash">
            <span>
              <Money />
            </span>
            Dinheiro
            <input
              type="radio"
              id="cash"
              value="cash"
              {...register("paymentMethod")}
            />
          </label>
        </Payment>
      </PaymentContainer>
    </Container>
  );
}
