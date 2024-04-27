"use client";
import React from "react";

import Image from "next/image";

import { useCart } from "contexts/cart-context";

import { Title, Container, CartIcon } from "./index.style";

export default function Header() {
  const { openCart, totalItems } = useCart();
  return (
    <Container>
      <Title>
        MKS <span>Sistemas</span>
      </Title>
      <CartIcon onClick={openCart}>
        <Image src="/Cart.svg" alt="Cart" width={19.01} height={18} />
        <p>{totalItems}</p>
      </CartIcon>
    </Container>
  );
}
