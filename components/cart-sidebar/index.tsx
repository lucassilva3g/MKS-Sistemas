"use client";

import { AnimatePresence } from "framer-motion";
import Image from "next/image";

import { useCart } from "contexts/cart-context";
import { formatPrice } from "utils";

import {
  CartButton,
  CartFooter,
  CartItemPrice,
  CartProducts,
  Icon,
  ProductsContainer,
  Quantity,
  QuantitySelector,
  QuantitySelectorButton,
  QuantitySelectorWrapper,
  RemoveProductButton,
  Sidebar,
  Title,
  TotalAmount,
  QuantityLabel,
  ProductImage,
} from "./style";
import { sidebarVariants } from "../../constants";

export function CartSidebar() {
  const {
    isCartOpen,
    addToCart,
    totalAmount,
    closeCartSidebar,
    cart,
    decrementQuantityOrRemove,
    deleteFromCart,
  } = useCart();

  return (
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

          <ProductsContainer>
            {cart &&
              cart.length > 0 &&
              cart.map((product) => (
                <CartProducts key={product.id}>
                  <ProductImage
                    src={product.photo}
                    alt="product-image"
                    width={55}
                    height={55}
                  />
                  {product.name}
                  <QuantitySelectorWrapper>
                    <QuantityLabel>Qnt.</QuantityLabel>
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
                  </QuantitySelectorWrapper>
                  <CartItemPrice>
                    {formatPrice(product.totalItemPrice)}
                  </CartItemPrice>
                  <RemoveProductButton
                    onClick={() => {
                      deleteFromCart(product.id);
                    }}
                  >
                    X
                  </RemoveProductButton>
                </CartProducts>
              ))}
          </ProductsContainer>

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
  );
}
