import { ShoppingCart } from 'phosphor-react';
import { CartIcon } from './styles';

interface CartLinkProps {
  badgeValue?: number;
}

export function CartButton({ badgeValue }: CartLinkProps) {
  return (
    <CartIcon value={badgeValue} type='button' to='/cart'>
      <ShoppingCart weight='fill' size={22} />
    </CartIcon>
  );
}
