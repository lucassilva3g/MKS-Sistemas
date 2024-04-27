"use client";

import { Tooltip } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

import { productsApi } from "api/queries/productsApi";
import { useCart } from "contexts/cart-context";

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

export default function ProductCollection() {
  const { isCartOpen } = useCart();

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
          <Card
            key={product.id}
            whileHover={{ scale: 1.1 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
          >
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

      <AnimatePresence>
        {isCartOpen && (
          <Sidebar
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
