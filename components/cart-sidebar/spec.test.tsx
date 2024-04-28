import React from "react";

import { render, screen, fireEvent } from "@testing-library/react";

import "@testing-library/jest-dom";
import { CartSidebar } from ".";
import { useCart } from "../../contexts/cart-context";

jest.mock("../../contexts/cart-context", () => ({
  useCart: jest.fn(),
}));

const mockUseCart = useCart as jest.Mock;

const mockCartState = {
  isCartOpen: true,
  cart: [
    {
      id: 1,
      name: "Product 1",
      photo: "/photo1.jpg",
      quantity: 2,
      totalItemPrice: 100,
    },
  ],
  totalAmount: 100,
  addToCart: jest.fn(),
  closeCartSidebar: jest.fn(),
  decrementQuantityOrRemove: jest.fn(),
  deleteFromCart: jest.fn(),
};

describe("CartSidebar component", () => {
  beforeEach(() => {
    mockUseCart.mockImplementation(() => mockCartState);
  });

  it("renders when isCartOpen is true", () => {
    render(<CartSidebar />);
    expect(screen.getByTestId("cart-sidebar")).toBeInTheDocument();
  });

  it("closes when close icon is clicked", () => {
    render(<CartSidebar />);
    fireEvent.click(screen.getByTestId("close-sidebar"));
    expect(mockCartState.closeCartSidebar).toHaveBeenCalled();
  });

  it("increments product quantity when increment button is clicked", () => {
    render(<CartSidebar />);
    fireEvent.click(screen.getByTestId("increment-1"));
    expect(mockCartState.addToCart).toHaveBeenCalledWith(mockCartState.cart[0]);
  });

  it("decrements product quantity when decrement button is clicked", () => {
    render(<CartSidebar />);
    fireEvent.click(screen.getByTestId("decrement-1"));
    expect(mockCartState.decrementQuantityOrRemove).toHaveBeenCalledWith(1);
  });

  it("removes product from cart when remove button is clicked", () => {
    render(<CartSidebar />);
    fireEvent.click(screen.getByTestId("remove-1"));
    expect(mockCartState.deleteFromCart).toHaveBeenCalledWith(1);
  });

  it("updates button text when finishing purchase", () => {
    render(<CartSidebar />);
    fireEvent.click(screen.getByTestId("finish-purchase-button"));
    expect(screen.getByTestId("finish-purchase-button")).toHaveTextContent(
      "Finalizando compra...",
    );
  });
});
