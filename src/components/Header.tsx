import "./Header.css";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <header className="Header">
      <h1>What's Good?</h1>
      <div>
        <SearchBar />
      </div>
    </header>
  );
};

export default Header;
