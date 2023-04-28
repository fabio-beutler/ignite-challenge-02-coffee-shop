import { CartSection } from './components/CartSection';
import { FormSection } from './components/FormSection';
import { Container } from './styles';

export function Cart() {
  return (
    <Container>
      <FormSection />
      <CartSection />
    </Container>
  );
}
