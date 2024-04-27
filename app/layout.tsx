import { Montserrat } from "next/font/google";

import { ReactQueryClientProvider } from "@/components/ReactQueryClientProvider";
import StyledComponentsRegistry from "lib/registry";
import "../styles/global.css";

const montserrat = Montserrat({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <ReactQueryClientProvider>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </ReactQueryClientProvider>
      </body>
    </html>
  );
}
