import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Filters from "./Filters";

test("testing rating options inputs in form", () => {
  render(
    <BrowserRouter>
      <Filters />
    </BrowserRouter>
  );

  //   const inputElement = screen.getByRole("listbox");
  //   //   fireEvent.change(inputElement, { target: { value: "1" } });

  //   //   const testElement = screen.getByText(1);
  //   expect(testElement).toBeInTheDocument();

  const btn = screen.getByRole("button", { name: "Filter Movies" });
  expect(btn).toBeInTheDocument();
});
