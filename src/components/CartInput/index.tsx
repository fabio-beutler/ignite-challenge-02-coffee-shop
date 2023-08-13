import { Minus, Plus } from "phosphor-react";
import { useState } from "react";

import { useCartContext } from "@/hooks/useCartContext";

import { Container } from "./styles";

interface CartInputProps {
  coffeeId: number;
  storedValue?: number;
}

export function CartInput({ coffeeId, storedValue }: CartInputProps) {
  const { addProduct, removeProduct, updateProductAmount, cart } =
    useCartContext();

  const [value, setValue] = useState(storedValue || 0);

  function handleIncreaseValue() {
    setValue((prevValue) => {
      if (prevValue < 20) {
        if (prevValue === 0) {
          addProduct(coffeeId);
        } else {
          updateProductAmount({ productId: coffeeId, amount: prevValue + 1 });
        }
        return prevValue + 1;
      }
      return prevValue;
    });
  }

  function handleDecreaseValue() {
    setValue((prevValue) => {
      if (prevValue > 0) {
        if (prevValue === 1) {
          removeProduct(coffeeId);
        } else {
          updateProductAmount({ productId: coffeeId, amount: prevValue - 1 });
        }
        return prevValue - 1;
      }
      return prevValue;
    });
  }

  function updateQuantity(quantity: number) {
    if (quantity === 0) {
      removeProduct(coffeeId);
    }
    if (cart.some((product) => product.id === coffeeId)) {
      updateProductAmount({ productId: coffeeId, amount: quantity });
    } else {
      addProduct(coffeeId);
      updateProductAmount({ productId: coffeeId, amount: quantity });
    }

    setValue(quantity);
  }

  return (
    <Container>
      <button type="button" onClick={handleDecreaseValue}>
        <Minus />
      </button>
      <input
        type="number"
        value={value}
        onChange={(e) => updateQuantity(Number(e.target.value))}
        readOnly
      />
      <button type="button" onClick={handleIncreaseValue}>
        <Plus />
      </button>
    </Container>
  );
}
