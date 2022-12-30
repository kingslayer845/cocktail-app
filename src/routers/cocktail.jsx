import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "../App.css";
import axios from "axios";
import Loading from "../utils/Loading";
function Cocktail() {
  const { drinklId } = useParams();
  const [loading, setLoading] = useState(false);
  const [data, setdata] = useState([]);
  console.log(data);
  useEffect(() => {
    async function searchById() {
      setLoading(true);
      const { data } = await axios(
        "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + drinklId
      );
      setdata(data.drinks[0]);
      setLoading(false);
    }
    searchById();
  }, []);
  if (loading) return <Loading />;
  const { strDrink, strDrinkThumb, strCategory, strAlcoholic, strGlass, strInstructions } = data;
  return (
    <div className=" text-center my-20 container">
      <Link className="details" to="/">
        BACK HOME
      </Link>
      <h2 className=" text-4xl font-semibold my-7 lg:my-20 lg:text-6xl">{strDrink}</h2>
      <div className=" flex flex-col gap-10 md:gap-16 lg:flex-row">
        <div className=" flex justify-center items-center  shadow-lg">
          <img
            className=" md:w-2/3 lg:w-full lg:h-[30rem] object-cover rounded-sm"
            src={strDrinkThumb}
            alt=""
          />
        </div>
        <div className="cocktail-details">
          <h4>
            <span className="green-info">name :</span>
            {strDrink}
          </h4>
          <h4>
            <span className="green-info">Category :</span>
            {strCategory}
          </h4>
          <h4>
            <span className="green-info">Info :</span>
            {strAlcoholic}
          </h4>
          <h4>
            <span className="green-info">Glass :</span>
            {strGlass}
          </h4>
          <h4>
            <span className="green-info">Instructons :</span>
            {strInstructions}
          </h4>
          <h4>
            <span className="green-info">Ingredients :</span>
            {strGlass}
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Cocktail;
