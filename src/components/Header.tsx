import "./Header.css";
import SearchBar from "./SearchBar";
import Filters from "./Filters";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="Header">
      <h1>What's Good?</h1>
      <div>
        <SearchBar />
        <Filters />
        <Link to="/movies/watchlist">
          <p>Watchlist</p>
        </Link>
      </div>
    </header>
  );
};

export default Header;
