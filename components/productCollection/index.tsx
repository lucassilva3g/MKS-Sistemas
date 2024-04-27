"use client";

import { Tooltip } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

import { productsApi } from "api/queries/productsApi";

import {
  Button,
  Card,
  Container,
  Paragraph,
  Price,
  ProductImage,
  ProductName,
  ProductPriceTitle,
} from "./index.style";

export default function ProductColletion() {
  const { data, isLoading, error } = useQuery({
    queryKey: [
      "products",
      { page: 1, rows: 10, sortBy: "id", orderBy: "DESC" },
    ],
    queryFn: ({ queryKey }) => {
      const [, params] = queryKey;
      if (typeof params === "object") {
        return productsApi(params);
      }
      throw new Error("Invalid query params");
    },
  });

  return (
    <Container>
      {data &&
        data.products.map((product) => (
          <Card key={product.id}>
            <ProductImage
              src={product.photo}
              alt="shopping-bag"
              width={111}
              height={138}
            />
            <ProductPriceTitle>
              <ProductName>{product.name}</ProductName>
              <Price>
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(product.price)}
              </Price>
            </ProductPriceTitle>
            <Tooltip title={product.description} placement="top">
              <Paragraph>{product.description}</Paragraph>
            </Tooltip>
            <Button>
              <Image
                src="/shopping-bag.svg"
                alt="shopping-bag"
                width={12}
                height={13.5}
              />
              COMPRAR
            </Button>
          </Card>
        ))}
    </Container>
  );
}
