import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Weather App heading", () => {
  render(<App />);
  const headingElement = screen.getByText(/Weather App/i);
  expect(headingElement).toBeInTheDocument();
});
