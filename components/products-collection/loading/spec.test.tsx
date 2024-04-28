import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";
import { Loading } from ".";

describe("Loading component", () => {
  it("renders 8 cards with skeletons", () => {
    render(<Loading />);
    const cards = screen.getAllByTestId(/card-/); // Matches all data-testids starting with 'card-'
    expect(cards).toHaveLength(8);
  });

  it("each card contains the correct number of Skeleton components", () => {
    render(<Loading />);
    Array.from({ length: 8 }).forEach((_, index) => {
      expect(screen.getByTestId(`image-skeleton-${index}`)).toBeInTheDocument();
      expect(
        screen.getByTestId(`title-skeleton-1-${index}`),
      ).toBeInTheDocument();
      expect(
        screen.getByTestId(`title-skeleton-2-${index}`),
      ).toBeInTheDocument();
      expect(screen.getByTestId(`text-skeleton-${index}`)).toBeInTheDocument();
      expect(
        screen.getByTestId(`footer-skeleton-${index}`),
      ).toBeInTheDocument();
    });
  });
});
