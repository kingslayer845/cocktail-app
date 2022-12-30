import React from "react";
import { Link } from "react-router-dom";
import Loading from "../utils/Loading";
import Search from "./Search";

function CocktailsGrid({ state, handleSearch, loading }) {
  if (loading) return <Loading />;

  return (
    <div>
      <Search handleSearch={handleSearch} />
      {state ? (
        <section className=" my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 container px-5 gap-10">
          {state.map(({ strDrink, strGlass, strDrinkThumb, strAlcoholic, idDrink }) => (
            <div key={idDrink} className="card">
              <img src={strDrinkThumb} />
              <div className="card-desc">
                <h2 className=" text-xl">{strDrink}</h2>
                <h3 className=" text-gray-500 text-sm">{strGlass}</h3>
                <p className=" text-gray-500 text-sm">{strAlcoholic}</p>
                <Link className="details" to={`/cocktail/${idDrink}`}>
                  DETAILS
                </Link>
              </div>
            </div>
          ))}
        </section>
      ) : (
        <h2 className=" text-xl text-center my-20">No data was found</h2>
      )}
    </div>
  );
}

export default CocktailsGrid;
