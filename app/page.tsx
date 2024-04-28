import { CartSidebar } from "@/components/cart-sidebar";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ProductsCollection } from "@/components/products-collection";

import { Container } from "./style";

export const metadata = {
  title: "App Router",
};

export default function LandingPage() {
  return (
    <Container>
      <Header />
      <ProductsCollection />
      <Footer />

      <CartSidebar />
    </Container>
  );
}
