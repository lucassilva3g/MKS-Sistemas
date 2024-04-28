import { render, screen } from "@testing-library/react";

import { Footer } from ".";

describe("<Footer/>", () => {
  it("should render", () => {
    render(<Footer />);
    expect(
      screen.getByText("MKS sistemas © Todos os direitos reservados"),
    ).toBeInTheDocument();
  });
});
