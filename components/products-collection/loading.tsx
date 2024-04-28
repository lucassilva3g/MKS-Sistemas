import { Skeleton } from "@mui/material";

import {
  Card,
  Container,
  Price,
  ProductImage,
  ProductName,
  ProductPriceTitle,
} from "./style";

export function Loading() {
  return (
    <Container>
      {Array.from({ length: 8 }, (_, index) => (
        <Card key={index}>
          <div style={{ marginTop: "20px" }}>
            <Skeleton variant="rectangular" width={111} height={138} />
          </div>

          <div style={{ width: "100%", padding: "0 15px" }}>
            <ProductPriceTitle>
              <Skeleton variant="text" width={"100%"} height={"31.91px"} />
              <Skeleton variant="text" width={"100%"} height={"31.91px"} />
            </ProductPriceTitle>
          </div>
          <div style={{ width: "100%", padding: "0 15px" }}>
            <Skeleton variant="text" width={"100%"} height={"31.91px"} />
          </div>

          <Skeleton variant="text" width={"100%"} height={"31.91px"} />
        </Card>
      ))}
    </Container>
  );
}
