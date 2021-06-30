import { heroes } from "../data/heros";

const getHerosByPublisher = (publisher) => {
  const validPublisher = ["DC Comics", "Marvel Comics"];

  if (!validPublisher.includes(publisher)) {
    throw new Error(`Publisher ${publisher} is not correct`);
  }

  return heroes.filter((hero) => hero.publisher === publisher);
};

export default getHerosByPublisher;
