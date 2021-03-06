import { heroes } from "../data/heros";

export const getHerosByName = (name = "") => {
  if (name === "") return [];
  name = name.toLowerCase();
  return heroes.filter((hero) => hero.superhero.toLowerCase().includes(name));
};
