import { api } from "lib/axios";

export interface Product {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: string;
  createdAt: string;
  updatedAt: string;
}

export interface ProductsResponse {
  products: Product[];
  count: number;
}

export const fetchProducts = async ({
  page = 1,
  rows = 10,
  sortBy = "id",
  orderBy = "desc",
}): Promise<ProductsResponse> => {
  try {
    const response = await api.get(`/products`, {
      params: { page, rows, sortBy, orderBy },
    });
    return response.data;
  } catch (error) {
    console.error("Failed to fetch products:", error);
    throw error;
  }
};
