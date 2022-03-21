import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Filters from "./Filters";

test("testing the button for filter movies", () => {
  render(
    <BrowserRouter>
      <Filters />
    </BrowserRouter>
  );

  const btn = screen.getByRole("button", { name: "Filter Movies" });
  expect(btn).toBeInTheDocument();
});

test("dropdown test", () => {
  // arrange
  render(
    <BrowserRouter>
      <Filters />
    </BrowserRouter>
  );

  // act
  const dropdown = screen.getByLabelText("min-Rating");
  fireEvent.change(dropdown, { target: { value: "1" } });

  //   assert
  const testElement = screen.getByDisplayValue("1");
  expect(testElement).toHaveValue("1");
});
