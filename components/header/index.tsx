"use client";
import React from "react";

import Image from "next/image";

import { useCart } from "contexts/cart-context";

import { Title, Container, CartIcon } from "./style";

export function Header() {
  const { openCartSidebar, totalItems } = useCart();
  return (
    <Container>
      <Title>
        MKS <span>Sistemas</span>
      </Title>
      <CartIcon onClick={openCartSidebar}>
        <Image src="/Cart.svg" alt="Cart" width={19.01} height={18} />
        <p>{totalItems}</p>
      </CartIcon>
    </Container>
  );
}
