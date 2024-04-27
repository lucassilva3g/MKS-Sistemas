import Footer from "@/components/footer/footer";
import Header from "@/components/header";
import ProductColletion from "@/components/productCollection";

import { Container } from "./style";

export const metadata = {
  title: "App Router",
};

export default function LandingPage() {
  return (
    <Container>
      <Header />
      <ProductColletion />
      <Footer />
    </Container>
  );
}
