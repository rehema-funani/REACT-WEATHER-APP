import React from "react";
import { render, screen } from "@testing-library/react";
import Weather from "./Weather";

test("renders Weather App heading", () => {
  render(<Weather />);
  const headingElement = screen.getByText(/Weather App/i);
  expect(headingElement).toBeInTheDocument();
});
