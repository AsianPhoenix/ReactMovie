import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchBar.css";

const SearchBar = () => {
  const [term, setTerm] = useState("");
  const navigate = useNavigate();
  const submitHandler = (e: FormEvent): void => {
    e.preventDefault();
    navigate(`/movies/search?${new URLSearchParams({ term })}`);
  };

  return (
    <form className="SearchBar" onSubmit={(e) => submitHandler(e)}>
      <p>{term}</p>
      <label htmlFor="searchTerm"></label>
      <input
        type="text"
        name="searchTerm"
        id="searchTerm"
        placeholder="Search for a Movie or Tv Show"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />

      <button>Search</button>
    </form>
  );
};

export default SearchBar;
