import React from "react";

import { render, screen, fireEvent } from "@testing-library/react";

import "@testing-library/jest-dom";

import { ProductsCollection } from ".";
import { useCart } from "../../contexts/cart-context";
import { useProductsQuery } from "../../hooks/useProductsQuery";

// Mock hooks
jest.mock("../../contexts/cart-context", () => ({
  useCart: jest.fn(),
}));
jest.mock("../../hooks/useProductsQuery", () => ({
  useProductsQuery: jest.fn(),
}));

// Define type assertions for mocks
const mockUseCart = useCart as jest.Mock;
const mockUseProductsQuery = useProductsQuery as jest.Mock;

describe("ProductsCollection component", () => {
  beforeEach(() => {
    const mockCartState = {
      addToCart: jest.fn(),
      openCartSidebar: jest.fn(),
    };
    mockUseCart.mockImplementation(() => mockCartState);

    const mockData = {
      products: [
        {
          id: 1,
          name: "Product 1",
          photo: "/photo1.jpg",
          price: "100",
          description: "Description 1",
        },
        {
          id: 2,
          name: "Product 2",
          photo: "/photo2.jpg",
          price: "200",
          description: "Description 2",
        },
      ],
    };
    mockUseProductsQuery.mockImplementation(() => ({
      isLoading: false,
      data: mockData,
    }));
  });

  it("renders products when data is available", () => {
    render(<ProductsCollection />);
    expect(screen.getByTestId("product-card-1")).toBeInTheDocument();
    expect(screen.getByTestId("product-card-2")).toBeInTheDocument();
  });

  it("renders the loading state when data is being fetched", () => {
    mockUseProductsQuery.mockImplementation(() => ({
      isLoading: true,
      data: null,
    }));
    render(<ProductsCollection />);
    expect(screen.getByTestId("loading")).toBeInTheDocument();
  });

  it('calls addToCart and openCartSidebar when the "COMPRAR" button is clicked', () => {
    render(<ProductsCollection />);
    fireEvent.click(screen.getByTestId("add-to-cart-1"));
    expect(mockUseCart().addToCart).toHaveBeenCalledWith({
      id: 1,
      name: "Product 1",
      photo: "/photo1.jpg",
      price: "100",
      description: "Description 1",
    });
    expect(mockUseCart().openCartSidebar).toHaveBeenCalled();
  });
});
