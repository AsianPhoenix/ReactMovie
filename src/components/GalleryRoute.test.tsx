import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import GalleryRoute from "./GalleryRoute";

test("renders movie link to details page", () => {
  render(
    <BrowserRouter>
      <GalleryRoute />
    </BrowserRouter>
  );
  const linkToTrending = screen.getByRole("link", {
    name: "What's Good?",
  });
  expect(linkToTrending).toBeInTheDocument();
});
