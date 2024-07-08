import React from "react";
import { render, screen } from '@testing-library/react';
import ErrorMessage from "./ErrorMessage";

describe("ErrorMessage", () => {
  test("renders error message correctly", () => {
    render(<ErrorMessage />);

    const errorImage = screen.getByAltText("Error en la búsqueda");
    const errorMessageTitle = screen.getByText("Error. No hay resultados para tu búsqueda.");
    const errorMessageText = screen.getByText("Introduce de nuevo una ciudad.");

    expect(errorImage).toBeInTheDocument();
    expect(errorMessageTitle).toBeInTheDocument();
    expect(errorMessageText).toBeInTheDocument();
  });
});
