import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Movie from "../models/Movie";
import Card from "./Card";

const testMovie: Movie = {
  id: 123,
  original_title: "test-title",
  release_date: "2345",
  poster_path: "www.yahoo.com",
  vote_average: 8,
  overview: "overview",
};

test("renders movie title", () => {
  render(
    <BrowserRouter>
      <Card movie={testMovie} />
    </BrowserRouter>
  );
  const titleElement = screen.getByText("test-title");
  expect(titleElement).toBeInTheDocument();
});

test("renders movie link to details page", () => {
  render(
    <BrowserRouter>
      <Card movie={testMovie} />
    </BrowserRouter>
  );
  const linkToDetails = screen.getByRole("link", {
    name: "test-title test-title",
  });
  expect(linkToDetails).toBeInTheDocument();
});

// test("renders movie by ID", () => {
//   render(
//     <BrowserRouter>
//       <Card movie={testMovie} />
//     </BrowserRouter>
//   );
//   const titleID = screen.getByTestId("123");
//   expect(titleID).toBeInTheDocument();
// });
