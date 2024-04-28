import { Product } from "api/fetchProducts";

export interface CartProduct extends Product {
  quantity: number;
  totalItemPrice: number;
}

export interface CartContextData {
  isCartOpen: boolean;
  totalItems: number;
  totalAmount: number;
  cart: CartProduct[];
  openCartSidebar: () => void;
  closeCartSidebar: () => void;
  addToCart: (product: Product) => void;
  deleteFromCart: (productId: number) => void;
  decrementQuantityOrRemove: (productId: number) => void;
}
