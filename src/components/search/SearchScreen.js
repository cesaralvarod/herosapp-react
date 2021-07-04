import React, { useMemo } from "react";
import queryString from "query-string";
import { useLocation } from "react-router";
import { useForm } from "../../hooks/useForm";
import HeroCard from "../heroes/HeroCard";
import { getHerosByName } from "../../selectors/getHerosByName";

const SearchScreen = ({ history }) => {
  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);

  const [formValues, handleInputChange] = useForm({ search: "" });

  const { search } = formValues;

  const heros = useMemo(() => getHerosByName(q), [q]);

  const handleSearch = (event) => {
    event.preventDefault();
    history.push(`?q=${search}`);
  };

  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-5">
          <h4>Search</h4>
          <hr />
          <form onSubmit={handleSearch}>
            <input
              type="text"
              name="search"
              placeholder="Find your hero"
              className="form-control"
              autoComplete="off"
              onChange={handleInputChange}
            />
            <button
              type="submit"
              className="btn mt-3 btn-block btn-outline-primary"
            >
              Search
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />
          {q === "" && <div className="alert alert-info">Search a hero</div>}
          {q !== "" && heros.length === 0 && (
            <div className="alert alert-danger">No results of {q}</div>
          )}
          {heros.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchScreen;
