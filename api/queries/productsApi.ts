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

export const productsApi = async ({
  page = 1,
  rows = 10,
  sortBy = "id",
  orderBy = "DESC",
}): Promise<ProductsResponse> => {
  const response = await api.get(
    `/products?page=${page}&rows=${rows}&sortBy=${sortBy}&orderBy=${orderBy}`,
  );
  return response.data;
};
