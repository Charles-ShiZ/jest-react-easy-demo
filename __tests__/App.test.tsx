import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "../src/App";

afterEach(cleanup);

describe("test the component App", () => {
  it("test App component", () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId("link")).toHaveTextContent("home");
  });
});
