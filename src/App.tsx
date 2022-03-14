import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Header from "./components/Header";
import GalleryRoute from "./components/GalleryRoute";
import DetailsRoute from "./components/DetailsRoute";
import WatchListRoute from "./components/WatchListRoute";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<GalleryRoute />} />
          <Route path="/movies/search" element={<GalleryRoute />} />
          <Route path="/movies/:id/details" element={<DetailsRoute />} />
          <Route path="/movies/watchlist" element={<WatchListRoute />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
