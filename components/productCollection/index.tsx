"use client";

import { Tooltip } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";

import { Product, productsApi } from "api/productsApi";
import { useCart } from "contexts/cart-context";
import { useProductsQuery } from "hooks/useProductsQuery";

import {
  Button,
  Card,
  Container,
  Paragraph,
  Price,
  ProductImage,
  ProductName,
  ProductPriceTitle,
  Sidebar,
} from "./index.style";

const sidebarVariants = {
  hidden: {
    x: "100vw",
    opacity: 0,
    transition: { type: "tween", duration: 0.2 },
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 250,
      damping: 25,
      mass: 0.4,
      when: "beforeChildren",
      staggerChildren: 0.05,
    },
  },
  exit: {
    x: "100vw",
    opacity: 0,
    transition: { type: "tween", duration: 0.15 },
  },
};

export default function ProductColletion() {
  const { isCartOpen, addToCart, openCart } = useCart();

  const { data, isLoading, error } = useProductsQuery();

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    openCart();
  };

  if (isLoading) return <p>Loading...</p>;

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
                }).format(Number(product.price))}
              </Price>
            </ProductPriceTitle>
            <Tooltip title={product.description} placement="top">
              <Paragraph>{product.description}</Paragraph>
            </Tooltip>
            <Button onClick={() => handleAddToCart(product)}>
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

      <AnimatePresence>
        {isCartOpen && (
          <Sidebar
            id="sidebar"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={sidebarVariants}
          ></Sidebar>
        )}
      </AnimatePresence>
    </Container>
  );
}
