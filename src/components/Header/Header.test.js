import React from "react";
import { render, screen, fireEvent } from '@testing-library/react';
import Header from "./Header";

describe("Header", () => {
  it("shows the image", () => {
    render(<Header />);
    const image = screen.getByAltText(/Weather Icon/i);
    expect(image).toBeInTheDocument();
  });

  it("shows the title", () => {
    render(<Header />);
    const title = screen.getByText(/EL TIEMPO/i);
    expect(title).toBeInTheDocument();
  });

  it("shows the subtitle", () => {
    render(<Header />);
    const subtitle = screen.getByText(/en tu ciudad/i);
    expect(subtitle).toBeInTheDocument();
  });
});
