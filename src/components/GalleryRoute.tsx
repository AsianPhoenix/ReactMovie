import { useEffect, useState } from "react";
import Movie from "../models/Movie";
import { getTrendingMovies } from "../services/TMDBService";
import "./GalleryRoute.css";

const GalleryRoute = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  useEffect(() => {
    getTrendingMovies().then((response) => {
      setMovies(response.results);
      console.log(response.results);
    });
  }, []);

  return <div className="GalleryRoute"></div>;
};

export default GalleryRoute;
