"use client";

import { Tooltip } from "@mui/material";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";

import { Product } from "api/fetchProducts";
import { useCart } from "contexts/cart-context";
import { useProductsQuery } from "hooks/useProductsQuery";
import { formatPrice } from "utils";

import {
  Button,
  Card,
  CartButton,
  CartFooter,
  CartItemPrice,
  CartProducts,
  Container,
  Icon,
  Paragraph,
  Price,
  ProductImage,
  ProductName,
  ProductPriceTitle,
  Quantity,
  QuantitySelector,
  QuantitySelectorButton,
  Sidebar,
  Title,
  TotalAmount,
} from "./index.style";
import { sidebarVariants } from "../../constants";

export default function ProductCollection() {
  const {
    isCartOpen,
    addToCart,
    openCartSidebar,
    totalAmount,
    closeCartSidebar,
    cart,
    decrementQuantityOrRemove,
  } = useCart();

  const { data, isLoading, error } = useProductsQuery();

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    openCartSidebar();
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
              <Price>{formatPrice(product.price)}</Price>
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
              <Icon onClick={closeCartSidebar}>X</Icon>
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
                  <QuantitySelector>
                    <QuantitySelectorButton
                      disabled={product.quantity === 1}
                      onClick={() => {
                        decrementQuantityOrRemove(product.id);
                      }}
                    >
                      -
                    </QuantitySelectorButton>
                    <Quantity>{product.quantity}</Quantity>
                    <QuantitySelectorButton
                      onClick={() => {
                        addToCart(product);
                      }}
                    >
                      +
                    </QuantitySelectorButton>
                  </QuantitySelector>
                  <CartItemPrice>
                    {formatPrice(product.totalItemPrice)}
                  </CartItemPrice>
                </CartProducts>
              ))}

            <CartFooter>
              <TotalAmount>
                <p>Total:</p>
                <p>{formatPrice(totalAmount)}</p>
              </TotalAmount>
              <CartButton>Finalizar compra</CartButton>
            </CartFooter>
          </Sidebar>
        )}
      </AnimatePresence>
    </Container>
  );
}
