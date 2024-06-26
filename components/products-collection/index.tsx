"use client";

import { Tooltip } from "@mui/material";
import Image from "next/image";

import { Product } from "api/fetchProducts";
import { useCart } from "contexts/cart-context";
import { useProductsQuery } from "hooks/useProductsQuery";
import { formatPrice } from "utils";

import { Loading } from "./loading";
import {
  Button,
  Card,
  Container,
  Paragraph,
  Price,
  ProductImage,
  ProductName,
  ProductPriceTitle,
} from "./style";

export function ProductsCollection() {
  const { addToCart, openCartSidebar } = useCart();
  const { data, isLoading } = useProductsQuery();

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    openCartSidebar();
  };

  if (isLoading) return <Loading />;

  return (
    <Container data-testid="product-container">
      {data &&
        data.products.map((product) => (
          <Card
            key={product.id}
            data-testid={`product-card-${product.id}`}
            whileHover={{ scale: 1.1 }}
          >
            <ProductImage
              src={product.photo}
              alt="product-image"
              width={111}
              height={138}
            />
            <ProductPriceTitle>
              <ProductName>{product.name}</ProductName>
              <Price>{formatPrice(product.price)}</Price>
            </ProductPriceTitle>
            <Tooltip title={product.description} placement="top">
              <Paragraph>{product.description}</Paragraph>
            </Tooltip>
            <Button
              onClick={() => handleAddToCart(product)}
              data-testid={`add-to-cart-${product.id}`}
            >
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
