import "./Header.css";

const Header = () => {
  return (
    <header className="Header">
      <h1>What's Good?</h1>
      <nav>
        <ul>
          <li>
            <Link to="/search">Search</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
