import React from "react";

import { render, fireEvent, screen } from "@testing-library/react";

import "@testing-library/jest-dom";
import { Header } from ".";
import { useCart } from "../../contexts/cart-context";

jest.mock("../../contexts/cart-context", () => ({
  useCart: jest.fn(),
}));

const mockUseCart = useCart as jest.Mock;

const mockCartState = {
  openCartSidebar: jest.fn(),
  totalItems: 1,
};

describe("Header component", () => {
  beforeEach(() => {
    mockUseCart.mockImplementation(() => mockCartState);
  });

  it("renders MKS Sistemas title and cart item count", () => {
    render(<Header />);
    expect(screen.getByText(/MKS/)).toBeVisible();
    expect(screen.getByText(/Sistemas/)).toBeVisible();
    expect(screen.getByText("1")).toBeVisible();
  });

  it("calls openCartSidebar when cart icon is clicked", () => {
    render(<Header />);
    fireEvent.click(screen.getByText("1"));
    expect(mockCartState.openCartSidebar).toHaveBeenCalled();
  });
});
