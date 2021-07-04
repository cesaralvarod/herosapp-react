import React, { useMemo } from "react";
import { Redirect, useHistory, useParams } from "react-router-dom";
import getHerosById from "../../selectors/getHerosById";

const HeroScreen = () => {
  const { heroId } = useParams();

  const history = useHistory();

  const hero = useMemo(() => getHerosById(heroId), [heroId]);

  // const hero = getHerosById(heroId);

  if (!hero) return <Redirect to="/" />;

  const { superhero, publisher, alter_ego, first_appearance, characters } =
    hero;

  const handleReturn = () => {
    if (history.length < 2) {
      history.push("/");
    } else {
      history.goBack();
    }
  };

  return (
    <div className="container">
      <div className="row mt-5 mb-5">
        <div className="col-4 animate__animated animate__fadeInLeft">
          <img
            src={require(`../../assets/heroes/${heroId}.jpg`).default}
            alt={superhero}
            className="img-thumbnail"
          />
        </div>
        <div className="col-8">
          <h3>{superhero}</h3>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <b>Alter ego:</b>
              {alter_ego}
            </li>
            <li className="list-group-item">
              <b>Publisher:</b>
              {publisher}
            </li>
            <li className="list-group-item">
              <b>First appearence:</b>
              {first_appearance}
            </li>
          </ul>
          <h5>Characters: </h5>
          <p>{characters}</p>
          <button className="btn btn-outline-info" onClick={handleReturn}>
            Return
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroScreen;
