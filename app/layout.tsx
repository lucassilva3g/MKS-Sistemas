import { Montserrat } from "next/font/google";

import { ReactQueryClientProvider } from "@/components/ReactQueryClientProvider";
import { CartProvider } from "contexts/cart-context";
import { StyledComponentsRegistry } from "lib/registry";
import "../styles/global.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={montserrat.className}>
        <ReactQueryClientProvider>
          <StyledComponentsRegistry>
            <CartProvider>{children}</CartProvider>
          </StyledComponentsRegistry>
        </ReactQueryClientProvider>
      </body>
    </html>
  );
}
