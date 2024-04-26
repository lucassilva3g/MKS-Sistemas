import { ReactQueryClientProvider } from "@/components/ReactQueryClientProvider";
import StyledComponentsRegistry from "lib/registry";

import "../styles/global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ReactQueryClientProvider>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </ReactQueryClientProvider>
      </body>
    </html>
  );
}
