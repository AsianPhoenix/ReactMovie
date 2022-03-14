import axios from "axios";
import Params from "../models/Params";
import GeneralTMDBResponse from "../models/GeneralTMDBResponse";
import GenreResponse from "../models/GenreResponse";

const key: string = process.env.REACT_APP_TMDB_KEY || "";

export const discoverMovies = (
  newParams: Params
): Promise<GeneralTMDBResponse> => {
  newParams.api_key = key;
  return axios
    .get("https://api.themoviedb.org/3/discover/movie", {
      params: newParams,
    })
    .then((response) => response.data);
};

export const getGenres = (): Promise<GenreResponse> => {
  return axios
    .get("https://api.themoviedb.org/3/genre/movie/list", {
      params: { api_key: key },
    })
    .then((response) => response.data);
};

export const getTrendingMovies = (): Promise<GeneralTMDBResponse> => {
  return axios
    .get("https://api.themoviedb.org/3/trending/all/day", {
      params: { api_key: key },
    })
    .then((response) => response.data);
};

export const getMoviesBySearchTerm = (
  query: string
): Promise<GeneralTMDBResponse> => {
  return axios
    .get("https://api.themoviedb.org/3/search/movie", {
      params: { api_key: key, query },
    })
    .then((response) => response.data);
};
