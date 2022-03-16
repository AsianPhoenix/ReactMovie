import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Genre from "../models/Genre";
import Movie from "../models/Movie";
import {
  discoverMovies,
  getGenres,
  getMoviesBySearchTerm,
  getTrendingMovies,
} from "../services/TMDBService";
import Card from "./Card";
import "./GalleryRoute.css";

const GalleryRoute = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  const [searchParams] = useSearchParams();
  const genre = searchParams.get("with_genres");
  const voteAvg = searchParams.get("vote_average.gte");
  const searchTerm = searchParams.get("term");

  useEffect(() => {
    if (searchTerm) {
      //   console.log(searchTerm);
      getMoviesBySearchTerm(searchTerm).then((response) => {
        setMovies(response.results);
      });
    } else if (genre || voteAvg) {
      discoverMovies({
        with_genres: genre!,
        "vote_average.gte": voteAvg!,
      }).then((response) => {
        setMovies(response.results);
      });
    } else
      getTrendingMovies().then((response) => {
        setMovies(response.results);
        console.log(response.results);
      });
  }, [searchTerm, voteAvg, genre]);

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
