import "./Card.css";
import Movie from "../models/Movie";
import { Link } from "react-router-dom";
interface Props {
  movie: Movie;
}

const Card = ({ movie }: Props) => {
  return (
    <Link to={`/movies/${encodeURIComponent(movie.id)}/details`}>
      <li className="Card">
        <p>{movie.original_title}</p>
        <img
          src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`}
          alt={movie.original_title}
        />
      </li>
    </Link>
  );
};

export default Card;
