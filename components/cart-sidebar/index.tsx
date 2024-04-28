"use client";

import { useState } from "react";

import { AnimatePresence } from "framer-motion";

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
  const [buttonText, setButtonText] = useState("Finalizar compra");

  const {
    isCartOpen,
    addToCart,
    totalAmount,
    closeCartSidebar,
    cart,
    decrementQuantityOrRemove,
    deleteFromCart,
  } = useCart();

  const handleFinishPurchase = () => {
    setButtonText("Finalizando compra...");

    setTimeout(() => {
      setButtonText("Finalizar compra");
    }, 5000);
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <Sidebar
          data-testid="cart-sidebar"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={sidebarVariants}
        >
          <Title>
            <h1>Carrinho de compras</h1>
            <Icon onClick={closeCartSidebar} data-testid="close-sidebar">
              X
            </Icon>
          </Title>

          <ProductsContainer>
            {cart &&
              cart.length > 0 &&
              cart.map((product) => (
                <CartProducts
                  key={product.id}
                  data-testid={`cart-product-${product.id}`}
                >
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
                        data-testid={`decrement-${product.id}`}
                        disabled={product.quantity === 1}
                        onClick={() => decrementQuantityOrRemove(product.id)}
                      >
                        -
                      </QuantitySelectorButton>
                      <Quantity>{product.quantity}</Quantity>
                      <QuantitySelectorButton
                        data-testid={`increment-${product.id}`}
                        onClick={() => addToCart(product)}
                      >
                        +
                      </QuantitySelectorButton>
                    </QuantitySelector>
                  </QuantitySelectorWrapper>
                  <CartItemPrice>
                    {formatPrice(product.totalItemPrice)}
                  </CartItemPrice>
                  <RemoveProductButton
                    data-testid={`remove-${product.id}`}
                    onClick={() => deleteFromCart(product.id)}
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
            <CartButton
              data-testid="finish-purchase-button"
              onClick={handleFinishPurchase}
              disabled={cart.length === 0}
            >
              {buttonText}
            </CartButton>
          </CartFooter>
        </Sidebar>
      )}
    </AnimatePresence>
  );
}
