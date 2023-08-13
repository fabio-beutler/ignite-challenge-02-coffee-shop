import { ShoppingCart } from "phosphor-react";

import { CartIcon } from "./styles";

interface CartLinkProps {
  badgeValue?: number;
}

export function CartLink({ badgeValue }: CartLinkProps) {
  return (
    <CartIcon value={badgeValue} to="/cart">
      <ShoppingCart weight="fill" size={22} />
    </CartIcon>
  );
}
