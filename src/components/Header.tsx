import "./Header.css";
import SearchBar from "./SearchBar";
import Filters from "./Filters";
import { Link, useLocation, useParams } from "react-router-dom";

const Header = () => {
  const location = useLocation().pathname;

  return (
    <header className="Header">
      <Link to="/movies" style={{ textDecoration: "none" }}>
        <h1>What's Good?</h1>
      </Link>
      <div className="headerDiv">
        {!location.includes("details") && !location.includes("watchlist") && (
          <div className="containerSearchandFilter">
            <SearchBar />
            <Filters />
          </div>
        )}
        <Link
          to="/movies/watchlist"
          style={{ textDecoration: "none", display: "flex" }}
        >
          <p className="watchlist">Watchlist</p>
          <i className="fa-solid fa-star"></i>
        </Link>
      </div>
    </header>
  );
};

export default Header;
