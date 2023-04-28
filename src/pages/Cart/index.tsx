import { Link } from 'react-router-dom';
import { useCartContext } from '../../hooks/useCartContext';
import { CartSection } from './components/CartSection';
import { FormSection } from './components/FormSection';
import { Container } from './styles';
import { FormProvider, useForm } from 'react-hook-form';
import * as z from 'zod';
import { useEffect, useState } from 'react';
import { Success } from '../Success';
import { zodResolver } from '@hookform/resolvers/zod';

const newOrderFormValidationSchema = z.object({
  cep: z.string().nonempty('O CEP é obrigatório'),
  street: z.string().nonempty('A rua é obrigatória'),
  number: z.string().nonempty('O número é obrigatório'),
  complement: z.string().optional(),
  district: z.string().nonempty('O bairro é obrigatório'),
  city: z.string().nonempty('A cidade é obrigatória'),
  uf: z.string().nonempty('Obrigatório').max(2, 'No máximo 2 caracteres'),
  paymentMethod: z.enum(['credit', 'debit', 'cash'] as const, {
    invalid_type_error: 'Selecione uma forma de pagamento',
  }),
});

export type NewOrderFormData = z.infer<typeof newOrderFormValidationSchema>;

export function Cart() {
  const { cart } = useCartContext();
  const newOrderForm = useForm<NewOrderFormData>({
    resolver: zodResolver(newOrderFormValidationSchema),
  });
  const { handleSubmit, formState } = newOrderForm;
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState<NewOrderFormData | null>(null);

  function handleConfirmOrder(data: NewOrderFormData) {
    // setSuccess(true);
    console.log(formState.errors);
    setFormData(data);
  }

  useEffect(() => {
    console.log(formState.errors);
  }, [formState]);

  if (cart.length === 0) {
    return (
      <Container>
        <h1>
          Seu carrinho está vazio, <Link to='/'>volte</Link> para o menu
        </h1>
      </Container>
    );
  }

  if (success && formData) {
    return <Success />;
  }

  return (
    <Container onSubmit={handleSubmit(handleConfirmOrder)}>
      <FormProvider {...newOrderForm}>
        <FormSection />
        <CartSection />
      </FormProvider>
    </Container>
  );
}
