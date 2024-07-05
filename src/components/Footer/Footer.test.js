import React from "react";
import { render, screen, fireEvent } from '@testing-library/react';
import Footer from "./Footer.jsx";

describe("Footer", () => {
  it("shows the footer message", () => {
    render(<Footer />);
    const text = screen.getByText(/Powered by/i);
    const text2 = screen.getByText(/OPEN WEATHER/i);
    expect(text).toBeInTheDocument();
    expect(text2).toBeInTheDocument();
  });

  it("opens the link in a new tab when clicked", () => {
    const mockOpen = jest.fn();
    window.open = mockOpen;
    
    render(<Footer />);
    const link = screen.getByText(/OPEN WEATHER/i);
    fireEvent.click(link);
    
    expect(mockOpen).toHaveBeenCalledWith("https://openweathermap.org/", "_blank");
  });
});
