import React from "react";
import Gallery from "../components/Gallery";

const Favorites = () => {
  return (
    <div className="App">
      <h1>Favoritos</h1>
      <Gallery showFavorites={true} />
    </div>
  );
};

export default Favorites;
