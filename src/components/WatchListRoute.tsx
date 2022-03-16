import { useContext } from "react";
import WatchlistContext from "../context/WatchlistContext";
import Movie from "../models/Movie";
import Card from "./Card";
import "./WatchListRoute.css";

const WatchListRoute = () => {
  const { watchlist } = useContext(WatchlistContext);
  return (
    <div className="WatchListRoute">
      {watchlist.map((movie: Movie) => (
        <Card movie={movie} key={movie.id} />
      ))}
    </div>
  );
};

export default WatchListRoute;
