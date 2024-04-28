import { Skeleton } from "@mui/material";

import { Card, Container, ProductPriceTitle } from "../style";

export function Loading() {
  return (
    <Container data-testid="loading">
      {Array.from({ length: 8 }, (_, index) => (
        <Card key={index} data-testid={`card-${index}`}>
          <div style={{ marginTop: "20px" }}>
            <Skeleton
              variant="rectangular"
              width={111}
              height={138}
              data-testid={`image-skeleton-${index}`}
            />
          </div>

          <div style={{ width: "100%", padding: "0 15px" }}>
            <ProductPriceTitle>
              <Skeleton
                variant="text"
                width={"100%"}
                height={"31.91px"}
                data-testid={`title-skeleton-1-${index}`}
              />
              <Skeleton
                variant="text"
                width={"100%"}
                height={"31.91px"}
                data-testid={`title-skeleton-2-${index}`}
              />
            </ProductPriceTitle>
          </div>
          <div style={{ width: "100%", padding: "0 15px" }}>
            <Skeleton
              variant="text"
              width={"100%"}
              height={"31.91px"}
              data-testid={`text-skeleton-${index}`}
            />
          </div>

          <Skeleton
            variant="text"
            width={"100%"}
            height={"31.91px"}
            data-testid={`footer-skeleton-${index}`}
          />
        </Card>
      ))}
    </Container>
  );
}
