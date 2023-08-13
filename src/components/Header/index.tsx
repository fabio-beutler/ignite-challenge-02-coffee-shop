import { MapPin } from "phosphor-react";
import { Link } from "react-router-dom";

import { useCartContext } from "@/hooks/useCartContext";
import { useLocation } from "@/hooks/useLocation";

import logo from "../../assets/logo.svg";
import { CartLink } from "../CartLink";
import { Container } from "./styles";

export function Header() {
  const { address, error } = useLocation();
  const { cart } = useCartContext();

  const storedValue = cart.reduce((acc, product) => {
    return acc + product.amount;
  }, 0);

  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Coffee Delivery" />
      </Link>

      <div>
        {!error && address && (
          <span>
            <span>
              <MapPin weight="fill" size={22} />
            </span>
            {address.city}, {address.state}
          </span>
        )}
        <CartLink badgeValue={storedValue} />
      </div>
    </Container>
  );
}
