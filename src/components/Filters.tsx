import { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Genre from "../models/Genre";
import GenreResponse from "../models/GenreResponse";
import Movie from "../models/Movie";
import Params from "../models/Params";
import { discoverMovies, getGenres } from "../services/TMDBService";
import "./Filters.css";

const Filters = () => {
  const [genre, setGenre] = useState("");
  const [genres, setGenres] = useState<Genre[]>([]);
  const [voteAvg, setVoteAvg] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e: FormEvent): void => {
    e.preventDefault();
    const queryStringParams: Params = {
      ...(genre ? { with_genres: genre } : {}),
      ...(voteAvg ? { "vote_average.gte": voteAvg } : {}),
    };
    navigate(`/movies/search?${new URLSearchParams({ ...queryStringParams })}`);
  };

  useEffect(() => {
    getGenres().then((response) => setGenres(response.genres));
  }, []);

  return (
    <form className="genres" onSubmit={(e) => submitHandler(e)}>
      <label htmlFor="genres">Genres</label>
      <select
        className="genresDropDown"
        id="genres"
        onChange={(e) => setGenre(e.target.value)}
      >
        <option value="all">All</option>
        {genres.map((genre) => (
          <option value={genre.id} key={genre.id}>
            {genre.name}
          </option>
        ))}
      </select>
      <label htmlFor="voteAvg">Minimum Rating</label>
      <select
        aria-label="min-Rating"
        className="voteAverage"
        id="voteAverage"
        onChange={(e) => setVoteAvg(e.target.value)}
      >
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
      <button>Filter Movies</button>
    </form>
  );
};

export default Filters;
