"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

import { Product } from "api/productsApi";

interface CartProduct extends Product {
  quantity: number;
}

interface CartContextData {
  isCartOpen: boolean;
  totalItems: number;
  totalAmount: number;
  cart: CartProduct[];
  openCart: () => void;
  closeCart: () => void;
  addToCart: (product: Product) => void;
  decrementQuantityOrRemove: (productId: number) => void;
}

const CartContext = createContext<CartContextData | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState<CartProduct[]>([]);

  const openCart = () => {
    setIsCartOpen(true);
  };

  const closeCart = useCallback(() => {
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
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem,
        );
      }
      return [...currentCart, { ...productToAdd, quantity: 1 }];
    });
  };

  const decrementQuantityOrRemove = (productId: number) => {
    setCart((currentCart: CartProduct[]) => {
      return currentCart.reduce<CartProduct[]>((acc, cartItem) => {
        if (cartItem.id === productId) {
          if (cartItem.quantity > 1) {
            acc.push({ ...cartItem, quantity: cartItem.quantity - 1 });
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
    (acc, product) => acc + product.quantity * product.price,
    0,
  );

  useEffect(() => {
    const closeSidebar = (event: MouseEvent) => {
      if (!(event.target as HTMLElement).closest("#sidebar")) {
        closeCart();
      }
    };

    if (isCartOpen) {
      document.addEventListener("click", closeSidebar);
    }

    return () => {
      document.removeEventListener("click", closeSidebar);
    };
  }, [isCartOpen, closeCart]);

  return (
    <CartContext.Provider
      value={{
        isCartOpen,
        totalItems,
        cart,
        openCart,
        closeCart,
        addToCart,
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
