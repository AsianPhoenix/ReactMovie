import { useState } from "react";
import "./Filters.css";

const Filters = () => {
  const [genre, setGenre] = useState();

  return (
    <form className="genres">
      <label htmlFor="genres">Genres</label>
      <select className="genresDropDown" id="genres">
        <option value="action">Action</option>
      </select>
    </form>
  );
};

export default Filters;
