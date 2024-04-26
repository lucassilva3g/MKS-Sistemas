"use client";
import React from "react";

import Image from "next/image";

import { Title, Container, CartIcon } from "./index.style";

export default function Header() {
  return (
    <Container>
      <Title>
        MKS <span>Sistemas</span>
      </Title>
      <CartIcon>
        <Image src="/Cart.svg" alt="Cart" width={19.01} height={18} />
        <p>0</p>
      </CartIcon>
    </Container>
  );
}
