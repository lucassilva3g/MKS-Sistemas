"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

import { Product } from "api/fetchProducts";

import { CartContextData, CartProduct } from "./types";

const CartContext = createContext<CartContextData | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [isCartOpen, setIsCartOpen] = useState(() => {
    if (typeof window !== "undefined") {
      const storagedIsCartOpen = localStorage.getItem(
        "@mk-sistemas:isCartOpen",
      );

      if (storagedIsCartOpen) {
        return JSON.parse(storagedIsCartOpen);
      }
    }

    return false;
  });
  const [cart, setCart] = useState<CartProduct[]>(() => {
    if (typeof window !== "undefined") {
      const storagedCarts = localStorage.getItem("@mk-sistemas:cart");

      if (storagedCarts) {
        return JSON.parse(storagedCarts);
      }
    }
    return [];
  });

  const openCartSidebar = () => {
    setIsCartOpen(true);
  };

  const closeCartSidebar = useCallback(() => {
    setIsCartOpen(false);
  }, []);

  const addToCart = (productToAdd: Product) => {
    setCart((currentCart) => {
      const foundProduct = currentCart.find(
        (cartItem) => cartItem.id === productToAdd.id,
      );
      if (foundProduct) {
        return currentCart.map((cartItem) =>
          cartItem.id === productToAdd.id
            ? {
                ...cartItem,
                quantity: cartItem.quantity + 1,
                totalItemPrice:
                  Number(cartItem.price) * (cartItem.quantity + 1),
              }
            : cartItem,
        );
      }
      return [
        ...currentCart,
        {
          ...productToAdd,
          quantity: 1,
          totalItemPrice: Number(productToAdd.price),
        },
      ];
    });
  };

  const deleteFromCart = (productId: number) => {
    setCart((currentCart) => {
      return currentCart.filter((cartItem) => cartItem.id !== productId);
    });
  };

  const decrementQuantityOrRemove = (productId: number) => {
    setCart((currentCart: CartProduct[]) => {
      return currentCart.reduce<CartProduct[]>((acc, cartItem) => {
        if (cartItem.id === productId) {
          if (cartItem.quantity > 1) {
            acc.push({
              ...cartItem,
              quantity: cartItem.quantity - 1,
              totalItemPrice: Number(cartItem.price) * (cartItem.quantity - 1),
            });
          }
        } else {
          acc.push(cartItem);
        }
        return acc;
      }, []);
    });
  };

  const totalItems = cart.reduce((acc, product) => acc + product.quantity, 0);

  const totalAmount = cart.reduce(
    (acc, product) => acc + product.quantity * Number(product.price),
    0,
  );

  useEffect(() => {
    localStorage.setItem("@mk-sistemas:cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("@mk-sistemas:isCartOpen", JSON.stringify(isCartOpen));
  }, [isCartOpen]);

  return (
    <CartContext.Provider
      value={{
        isCartOpen,
        totalItems,
        cart,
        openCartSidebar,
        closeCartSidebar,
        addToCart,
        deleteFromCart,
        decrementQuantityOrRemove,
        totalAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return context;
};
