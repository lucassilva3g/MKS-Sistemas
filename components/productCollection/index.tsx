"use client";

import Image from "next/image";

import {
  Button,
  Card,
  Container,
  Paragraph,
  Price,
  ProductImage,
  ProductPriceTitle,
} from "./index.style";

export default function ProductColletion() {
  return (
    <Container>
      <Card>
        <ProductImage
          src="/apple-watch.png"
          alt="shopping-bag"
          width={111}
          height={138}
        />
        <ProductPriceTitle>
          <p>Apple Watch Series 4 GPS </p>
          <Price>R$399</Price>
        </ProductPriceTitle>
        <Paragraph>Redesigned from scratch and completely revised.</Paragraph>
        <Button>
          <Image
            src="/shopping-bag.svg"
            alt="shopping-bag"
            width={12}
            height={13.5}
          />
          COMPRAR
        </Button>
      </Card>
      <Card>
        <ProductImage
          src="/jbl-speaker.png"
          alt="shopping-bag"
          width={54.79}
          height={138}
        />
        <ProductPriceTitle>
          <p>JBL Speaker</p>
          <Price>R$199</Price>
        </ProductPriceTitle>
        <Paragraph>Redesigned from scratch and completely revised.</Paragraph>
        <Button>
          <Image
            src="/shopping-bag.svg"
            alt="shopping-bag"
            width={12}
            height={13.5}
          />
          COMPRAR
        </Button>
      </Card>
      <Card>
        <ProductImage
          src="/iphone-x.png"
          alt="shopping-bag"
          width={147.86}
          height={138}
        />
        <ProductPriceTitle>
          <p>Apple iPhone X 128GB</p>
          <Price>R$899</Price>
        </ProductPriceTitle>
        <Paragraph>Redesigned from scratch and completely revised.</Paragraph>
        <Button>
          <Image
            src="/shopping-bag.svg"
            alt="shopping-bag"
            width={12}
            height={13.5}
          />
          COMPRAR
        </Button>
      </Card>
      <Card>
        <ProductImage
          src="/beats-headphones.png"
          alt="shopping-bag"
          width={97.06}
          height={139}
        />
        <ProductPriceTitle>
          <p>Beats Headphones</p>
          <Price>R$459</Price>
        </ProductPriceTitle>
        <Paragraph>Redesigned from scratch and completely revised.</Paragraph>
        <Button>
          <Image
            src="/shopping-bag.svg"
            alt="shopping-bag"
            width={12}
            height={13.5}
          />
          COMPRAR
        </Button>
      </Card>
      <Card>
        <ProductImage
          src="/macbook-pro.png"
          alt="shopping-bag"
          width={171.62}
          height={115}
        />
        <ProductPriceTitle>
          <p>Apple Macbook Pro</p>
          <Price>R$2.499</Price>
        </ProductPriceTitle>
        <Paragraph>Redesigned from scratch and completely revised.</Paragraph>
        <Button>
          <Image
            src="/shopping-bag.svg"
            alt="shopping-bag"
            width={12}
            height={13.5}
          />
          COMPRAR
        </Button>
      </Card>
      <Card>
        <ProductImage
          src="/ipad-pro.png"
          alt="shopping-bag"
          width={121.64}
          height={138}
        />
        <ProductPriceTitle>
          <p>Apple iPad Pro 64GB</p>
          <Price>R$899</Price>
        </ProductPriceTitle>
        <Paragraph>Redesigned from scratch and completely revised.</Paragraph>
        <Button>
          <Image
            src="/shopping-bag.svg"
            alt="shopping-bag"
            width={12}
            height={13.5}
          />
          COMPRAR
        </Button>
      </Card>
      <Card>
        <ProductImage
          src="/homepod.png"
          alt="shopping-bag"
          width={112.41}
          height={138}
        />
        <ProductPriceTitle>
          <p>Apple Homepod</p>
          <Price>R$399</Price>
        </ProductPriceTitle>
        <Paragraph>Redesigned from scratch and completely revised.</Paragraph>
        <Button>
          <Image
            src="/shopping-bag.svg"
            alt="shopping-bag"
            width={12}
            height={13.5}
          />
          COMPRAR
        </Button>
      </Card>
      <Card>
        <ProductImage
          src="/jlab-audio-wireless.png"
          alt="shopping-bag"
          width={172}
          height={118.21}
        />
        <ProductPriceTitle>
          <p>JBuds Air Wireless</p>
          <Price>R$249</Price>
        </ProductPriceTitle>
        <Paragraph>Redesigned from scratch and completely revised.</Paragraph>
        <Button>
          <Image
            src="/shopping-bag.svg"
            alt="shopping-bag"
            width={12}
            height={13.5}
          />
          COMPRAR
        </Button>
      </Card>
    </Container>
  );
}
