import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import SearchBar from "./SearchBar";

test("searchBar updates state on form input", () => {
  render(
    <BrowserRouter>
      <SearchBar />
    </BrowserRouter>
  );

  const inputElement = screen.getByRole("textbox");
  fireEvent.change(inputElement, { target: { value: "Batman" } });

  const testElement = screen.getByText("Batman");
  expect(testElement).toBeInTheDocument();
});
