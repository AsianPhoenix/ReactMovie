import "./Header.css";
import SearchBar from "./SearchBar";
import Filters from "./Filters";

const Header = () => {
  return (
    <header className="Header">
      <h1>What's Good?</h1>
      <div>
        <SearchBar />
        <Filters />
      </div>
    </header>
  );
};

export default Header;
