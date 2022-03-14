import axios from "axios";
import FilterOptions from "../models/FilterOptions";
import GeneralTMDBResponse from "../models/GeneralTMDBResponse";

const key: string = process.env.REACT_APP_TMDB_KEY || "";

export const discoverMovies = (
  filterOptions: FilterOptions
): Promise<GeneralTMDBResponse> => {
  return axios
    .get("https://api.themoviedb.org/3/discover/movie", {
      params: filterOptions,
    })
    .then((response) => {
      return response.data;
    });
};
