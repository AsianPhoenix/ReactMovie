import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Genre from "../models/Genre";
import Movie from "../models/Movie";
import {
  getGenres,
  getMoviesBySearchTerm,
  getTrendingMovies,
} from "../services/TMDBService";
import Card from "./Card";
import "./GalleryRoute.css";

const GalleryRoute = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [genres, setGenres] = useState<Genre[]>([]);
  const [searchParams] = useSearchParams();
  const [queryStringParams] = useSearchParams();
  const searchTerm = searchParams.get("term");
  const params = queryStringParams.get("...queryStringParams");
  //   console.log(searchTerm);

  useEffect(() => {
    if (searchTerm) {
      //   console.log(searchTerm);
      getMoviesBySearchTerm(searchTerm).then((response) => {
        setMovies(response.results);
      });
    } else if (params) {
      getGenres().then((response) => {
        setGenres(response.genres);
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
