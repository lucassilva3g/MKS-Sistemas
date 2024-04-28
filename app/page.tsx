import Footer from "@/components/footer";
import Header from "@/components/header";
import ProductCollection from "@/components/productCollection";

import { Container } from "./style";

export const metadata = {
  title: "App Router",
};

export default function LandingPage() {
  return (
    <Container>
      <Header />
      <ProductCollection />
      <Footer />
    </Container>
  );
}
