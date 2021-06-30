import { heroes } from "../data/heros";

const getHerosById = (id) => {
  return heroes.find((hero) => hero.id === id);
};

export default getHerosById;
