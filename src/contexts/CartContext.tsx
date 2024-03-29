import { createContext, ReactNode, useState } from "react";
import { toast } from "react-toastify";

import { Coffee, CoffeeMenu } from "../constants/menu";

interface CartProviderProps {
  children: ReactNode;
}

interface UpdateProductAmount {
  productId: number;
  amount: number;
}

export interface Product extends Coffee {
  amount: number;
}

interface CartContextData {
  cart: Product[];
  addProduct: (productId: number) => void;
  removeProduct: (productId: number) => void;
  updateProductAmount: ({ productId, amount }: UpdateProductAmount) => void;
  clearCart: () => void;
}

export const CartContext = createContext<CartContextData>(
  {} as CartContextData,
);

export function CartProvider({ children }: CartProviderProps): JSX.Element {
  const [cart, setCart] = useState<Product[]>(() => {
    const storagedCart = localStorage.getItem("@coffee-shop:cart");

    if (storagedCart) {
      return JSON.parse(storagedCart);
    }

    return [];
  });

  const addProduct = (productId: number) => {
    try {
      const updatedCart = [...cart];
      const productExists = updatedCart.find(
        (product) => product.id === productId,
      );
      const currentAmount = productExists ? productExists.amount : 0;
      const amount = currentAmount + 1;

      if (productExists) {
        productExists.amount = amount;
      } else {
        const product = CoffeeMenu.find((product) => product.id === productId);
        if (!product) return;
        updatedCart.push({ ...product, amount: 1 });
      }

      setCart(updatedCart);
      localStorage.setItem("@coffee-shop:cart", JSON.stringify(updatedCart));

      toast.success("Produto adicionado com sucesso");
    } catch {
      toast.error("Erro na adição do produto");
    }
  };

  const removeProduct = (productId: number) => {
    try {
      const updatedCart = [...cart];
      const productIndex = updatedCart.findIndex(
        (product) => product.id === productId,
      );

      if (productIndex >= 0) {
        updatedCart.splice(productIndex, 1);
        setCart(updatedCart);
        localStorage.setItem("@coffee-shop:cart", JSON.stringify(updatedCart));
      } else {
        console.error("Erro na remoção do produto");
      }
    } catch {
      toast.error("Erro na remoção do produto");
    }
  };

  const updateProductAmount = ({ productId, amount }: UpdateProductAmount) => {
    try {
      if (amount <= 0) {
        return;
      }

      const updatedCart = [...cart];
      const productExists = updatedCart.find(
        (product) => product.id === productId,
      );

      if (productExists) {
        productExists.amount = amount;
        setCart(updatedCart);
        localStorage.setItem("@coffee-shop:cart", JSON.stringify(updatedCart));
      } else {
        console.error("Erro na alteração de quantidade do produto");
      }
    } catch {
      toast.error("Erro na alteração de quantidade do produto");
    }
  };

  function clearCart() {
    localStorage.removeItem("@coffee-shop:cart");
    setCart([]);
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addProduct,
        removeProduct,
        updateProductAmount,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
