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
  return (
    <li className="Card">
      <Link to={`/movies/${encodeURIComponent(movie.id)}/details`}>
        <p>{movie.original_title}</p>
        <img
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
