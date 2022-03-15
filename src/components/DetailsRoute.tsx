import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Movie from "../models/Movie";
import { getMovieById } from "../services/TMDBService";
import Card from "./Card";
import "./DetailsRoute.css";

const DetailsRoute = () => {
  const [movie, setMovie] = useState<Movie>();
  const id: string | undefined = useParams().id;

  useEffect(() => {
    getMovieById(id!).then((response) => {
      setMovie(response);
    });
  }, [id]);

  return (
    <div className="DetailsRoute">
      {movie ? <Card movie={movie!} /> : <p>Loading</p>}{" "}
      <p>{movie?.overview}</p>
      <p>{movie?.release_date}</p>
      <p>{movie?.vote_average}</p>
    </div>
  );
};

export default DetailsRoute;
