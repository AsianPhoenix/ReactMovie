import { createContext } from "react";
import Movie from "../models/Movie";

interface WatchlistContextModel {
  watchlist: Movie[];
  addMovie: (movie: Movie) => void;
  removeMovie: (id: number) => void;
  isFav: (id: number) => boolean;
}

const defaultValues: WatchlistContextModel = {
  watchlist: [],
  addMovie: () => {},
  removeMovie: () => {},
  isFav: () => false,
};

const WatchlistContext = createContext(defaultValues);

export default WatchlistContext;
