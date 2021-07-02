import React from "react";
import HeroList from "../heroes/HeroList";

const MarvelScreen = () => {
  return (
    <div className="container mt-2">
      <h1>Marvel heros</h1>
      <hr />
      <HeroList publisher="Marvel Comics" />
    </div>
  );
};

export default MarvelScreen;
