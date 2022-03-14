import "./Card.css";
import Movie from "../models/Movie";
interface Props {
  movie: Movie;
}

const Card = ({ movie }: Props) => {
  return (
    <li className="Card">
      <p>{movie.original_title}</p>
      <img
        src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`}
        alt={movie.original_title}
      />
    </li>
  );
};

export default Card;
