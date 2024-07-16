import React from "react";
import { render, screen } from '@testing-library/react';
import WeatherCard from "./WeatherCard";

describe("WeatherCard", () => {
  test("renders weather card correctly", () => {
    const mockWeatherData = {
      imagen: "01d",
      temperatura: 25,
      sensacionTermica: 27,
      descripcion: "Soleado",
      fecha: "2022-12-25",
      hora: "12:00"
    };

    render(<WeatherCard {...mockWeatherData} />);

    const weatherIcon = screen.getByAltText("Weather Icon");
    const description = screen.getByText("Soleado");
    const temperature = screen.getByText("Temperatura: 25°");
    const feelsLike = screen.getByText("Sensación térmica: 27°");
    const date = screen.getByText("2022-12-25");
    const time = screen.getByText("12:00");

    expect(weatherIcon).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(temperature).toBeInTheDocument();
    expect(feelsLike).toBeInTheDocument();
    expect(date).toBeInTheDocument();
    expect(time).toBeInTheDocument();
  });
});
