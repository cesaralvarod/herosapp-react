import React from "react";
import HeroList from "../heroes/HeroList";

const DcScreen = () => {
  return (
    <div className="container mt-2">
      <h1>DC heros</h1>
      <hr />
      <HeroList publisher="DC Comics" />
    </div>
  );
};

export default DcScreen;
