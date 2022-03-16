import "./Card.css";
import Movie from "../models/Movie";
import { Link } from "react-router-dom";
import WatchlistContext from "../context/WatchlistContext";
import { useContext } from "react";
interface Props {
  movie: Movie;
}

const Card = ({ movie }: Props) => {
  const { addMovie, removeMovie, isFav } = useContext(WatchlistContext);
  console.log(movie);
  return (
    <li className="Card">
      <Link
        to={`/movies/${encodeURIComponent(movie.id)}/details`}
        style={{ textDecoration: "none", color: "black" }}
      >
        <p className="movieTitle">{movie.original_title}</p>
        <img
          className="moviePoster"
          src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`}
          alt={movie.original_title}
        />
      </Link>
      {isFav(movie.id) ? (
        <i
          className="fa-solid fa-star"
          onClick={() => removeMovie(movie.id)}
        ></i>
      ) : (
        <i className="fa-regular fa-star" onClick={() => addMovie(movie)}></i>
      )}
    </li>
  );
};

export default Card;
