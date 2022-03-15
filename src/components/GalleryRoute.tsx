import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Movie from "../models/Movie";
import {
  getMoviesBySearchTerm,
  getTrendingMovies,
} from "../services/TMDBService";
import Card from "./Card";
import "./GalleryRoute.css";

const GalleryRoute = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("term");
  //   console.log(searchTerm);

  useEffect(() => {
    if (searchTerm) {
      //   console.log(searchTerm);
      getMoviesBySearchTerm(searchTerm).then((response) => {
        setMovies(response.results);
      });
    } else
      getTrendingMovies().then((response) => {
        setMovies(response.results);
        console.log(response.results);
      });
  }, [searchTerm]);

  return (
    <div className="GalleryRoute">
      <ul>
        {movies.map((movie) => (
          <Card movie={movie} />
        ))}
      </ul>
    </div>
  );
};

export default GalleryRoute;
