import "./Header.css";
import SearchBar from "./SearchBar";
import Filters from "./Filters";
import { Link, useParams } from "react-router-dom";

const Header = () => {
  // const id: string | undefined = useParams().id;
  // console.log(useParams());

  return (
    <header className="Header">
      <h1>What's Good?</h1>
      <div className="headerDiv">
        {/* {!id && ( */}
        <div className="containerSearchandFilter">
          <SearchBar />
          <Filters />
        </div>
        {/* // )} */}
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
