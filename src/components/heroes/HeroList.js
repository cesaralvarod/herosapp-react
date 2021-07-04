import React, { useMemo } from "react";
import getHerosByPublisher from "../../selectors/getHerosByPublisher";
import HeroCard from "./HeroCard";

const HeroList = ({ publisher }) => {
  const heros = useMemo(() => getHerosByPublisher(publisher), [publisher]);

  // const heros = getHerosByPublisher(publisher);

  return (
    <div className="row row-cols-1 row-cols-md-2 g-4 mb-5 animate__animated animate__bounceInLeft">
      {heros.map((hero) => {
        return (
          <div key={hero.id} className="col">
            <HeroCard key={hero.id} {...hero} />
          </div>
        );
      })}
    </div>
  );
};

export default HeroList;
