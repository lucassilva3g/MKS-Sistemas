"use client";

import { Tooltip } from "@mui/material";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";

import { Product } from "api/productsApi";
import { useCart } from "contexts/cart-context";
import { useProductsQuery } from "hooks/useProductsQuery";

import {
  Button,
  Card,
  CartButton,
  CartFooter,
  CartProducts,
  Container,
  Icon,
  Paragraph,
  Price,
  ProductImage,
  ProductName,
  ProductPriceTitle,
  Sidebar,
  Title,
  TotalAmount,
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
    transition: { type: "tween", duration: 2.5 },
  },
};

export default function ProductCollection() {
  const {
    isCartOpen,
    addToCart,
    openCart,
    totalAmount,
    closeCart,
    cart,
    decrementQuantityOrRemove,
  } = useCart();

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
          <Card
            key={product.id}
            whileHover={{ scale: 1.1 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
          >
            <ProductImage
              src={product.photo}
              alt="product-image"
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
          >
            <Title>
              <h1>Carrinho de compras</h1>
              <Icon onClick={closeCart}>X</Icon>
            </Title>
            {cart &&
              cart.length > 0 &&
              cart.map((product) => (
                <CartProducts key={product.id}>
                  <Image
                    src={product.photo}
                    alt="product-image"
                    width={60}
                    height={60}
                  />
                  {product.name}
                  <div>
                    <button
                      onClick={() => {
                        decrementQuantityOrRemove(product.id);
                      }}
                    >
                      -
                    </button>
                    <span>{product.quantity}</span>
                    <button
                      onClick={() => {
                        addToCart(product);
                      }}
                    >
                      +
                    </button>
                  </div>
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(Number(product.price))}
                </CartProducts>
              ))}

            <CartFooter>
              <TotalAmount>
                <p>Total:</p>
                <p>
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(Number(totalAmount))}
                </p>
              </TotalAmount>
              <CartButton>Finalizar compra</CartButton>
            </CartFooter>
          </Sidebar>
        )}
      </AnimatePresence>
    </Container>
  );
}
