import { useQuery } from "@tanstack/react-query";

import { fetchProducts } from "api/productsApi";

export const useProductsQuery = (
  params = { page: 1, rows: 10, sortBy: "id", orderBy: "DESC" },
) => {
  return useQuery({
    queryKey: ["products"],
    queryFn: () => fetchProducts(params),
  });
};
