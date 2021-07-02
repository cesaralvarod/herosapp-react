import React from "react";
import getHerosByPublisher from "../../selectors/getHerosByPublisher";
import HeroCard from "./HeroCard";

const HeroList = ({ publisher }) => {
  const heros = getHerosByPublisher(publisher);

  return (
    <div className="row row-cols-1 row-cols-md-2 g-4 mb-5">
      {heros.map((hero) => {
        return (
          <div className="col">
            <HeroCard key={hero.id} {...hero} />
          </div>
        );
      })}
    </div>
  );
};

export default HeroList;
