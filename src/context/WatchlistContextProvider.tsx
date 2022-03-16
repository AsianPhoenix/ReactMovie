import { ReactNode, useState } from "react";
import Movie from "../models/Movie";
import WatchlistContext from "./WatchlistContext";

interface Props {
  children: ReactNode;
}

const WatchlistContextProvider = ({ children }: Props) => {
  const [watchlist, setWatchlist] = useState<Movie[]>([]);

  const addMovie = (movie: Movie): void => {
    setWatchlist((prev) => [...prev, movie]);
  };

  const removeMovie = (id: number): void => {
    setWatchlist((prev) => {
      const index: number = prev.findIndex((item) => item.id === id);
      return [...prev.slice(0, index), ...prev.slice(index + 1)];
    });
  };

  const isFav = (id: number): boolean =>
    watchlist.some((movie) => movie.id === id);

  return (
    <WatchlistContext.Provider
      value={{ watchlist, addMovie, removeMovie, isFav }}
    >
      {children}
    </WatchlistContext.Provider>
  );
};

export default WatchlistContextProvider;
