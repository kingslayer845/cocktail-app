import axios from "axios";
import React, { useEffect, useReducer, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CocktailsGrid from "./components/CocktailsGrid";
import About from "./routers/About";
import Cocktail from "./routers/cocktail";
import Nav from "./routers/Navbar";
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

function App() {
  const [loading, setLoading] = useState(false);
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const { data } = await axios(url);
      setDrinks(data.drinks);
      setLoading(false);
    }
    fetchData();
  }, []);

  function handleSearch(event) {
    const value = event.target.value;
    if (!value) return;
    fetch(url + value)
      .then((res) => res.json())
      .then(({ drinks }) => setDrinks(drinks));
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route
            path="/"
            element={<CocktailsGrid loading={loading} state={drinks} handleSearch={handleSearch} />}
          />

          <Route path="cocktail/:drinklId" element={<Cocktail />} />
          <Route path="about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
