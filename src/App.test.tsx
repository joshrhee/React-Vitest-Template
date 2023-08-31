import App from "./App";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

it("should have hello world", () => {
  render(<App />);
  const message = screen.queryByText(/Hellow World/i);
  expect(message).toBeVisible();
});
