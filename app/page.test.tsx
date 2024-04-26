import { render, screen } from "@testing-library/react";

import LandingPage from "./page";

describe("<LandingPage/>", () => {
  it("should render", () => {
    render(<LandingPage />);
    expect(screen.getByText("Lucas")).toBeInTheDocument();
  });
});
