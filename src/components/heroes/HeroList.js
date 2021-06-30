import React from "react";
import getHerosByPublisher from "../../selectors/getHerosByPublisher";

const HeroList = ({ publisher }) => {
  const heros = getHerosByPublisher(publisher);

  return (
    <ul>
      {heros.map((hero) => (
        <li key={hero.id}>{hero.superhero}</li>
      ))}
    </ul>
  );
};

export default HeroList;
