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
        </Card>
      ))}
    </Container>
  );
}
