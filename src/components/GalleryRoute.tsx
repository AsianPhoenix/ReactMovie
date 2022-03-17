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
  const [genres, setGenres] = useState<Genre[]>([]);
  const [searchParams] = useSearchParams();
  const genre = searchParams.get("with_genres");
  const voteAvg = searchParams.get("vote_average.gte");
  const searchTerm = searchParams.get("term");
  const [trendingFlag, setTrendingFlag] = useState(true);
  let genreName = "";

  useEffect(() => {
    if (searchTerm) {
      //   console.log(searchTerm);
      getMoviesBySearchTerm(searchTerm).then((response) => {
        setMovies(response.results);
        setTrendingFlag(false);
      });
    } else if (genre || voteAvg) {
      if (genre) {
        getGenres().then((response) => {
          setGenres(response.genres);
          const foundName = response.genres.find(
            (item) => item.id === parseInt(genre)
          );
          if (foundName) {
            genreName = foundName.toString();
          }
        });
      }

      discoverMovies({
        with_genres: genre!,
        "vote_average.gte": voteAvg!,
      }).then((response) => {
        setMovies(response.results);
        setTrendingFlag(false);
      });
    } else
      getTrendingMovies().then((response) => {
        setMovies(response.results);
        console.log(response.results);
        setTrendingFlag(true);
      });
  }, [searchTerm, voteAvg, genre]);

  return (
    <div className="GalleryRoute">
      <h1 className="mobileTitle">What's Good?</h1>
      <h2>{trendingFlag ? "Trending" : ""}</h2>
      <ul>
        {movies.map((movie) => (
          <Card movie={movie} key={movie.id} />
        ))}
      </ul>
    </div>
  );
};

export default GalleryRoute;
