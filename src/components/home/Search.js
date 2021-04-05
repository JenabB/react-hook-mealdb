import React, { useState, useEffect } from "react";
import ForYou from "./ForYou";
import { Link } from "react-router-dom";

const Search = () => {
  const [search, setSearch] = useState("");
  const [recipe, setRecipe] = useState([]);
  const [url, setUrl] = useState(
    "https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata"
  );

  const handleChangeSearch = (e) => {
    setSearch(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
  };

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setRecipe(data.meals[0]))
      .catch((error) => console.log(error));
  }, [url]);

  return (
    <div className="p-4 text-center">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          className="bg-purple-100 px-3 py-2 shadow rounded border-0"
          value={search}
          placeholder="search for meal"
          onChange={handleChangeSearch}
        />
      </form>
      <div className="search-container">
        <div className="mt-4">
          {search ? (
            <Link to={`recipe/${recipe.idMeal}`}>
              <div className="w-card h-card rounded shadow-lg">
                <img
                  className="rounded-t-lg"
                  src={recipe.strMealThumb}
                  alt="Meal"
                  loading="lazy"
                />
                <div className="recipe-information px-2 py-4">
                  <div className="text-sm truncate">{recipe.strMeal}</div>
                  <p className="text-gray-700 truncate overflow-clip overflow-hidden h-2/4 text-base">
                    {recipe.strArea}
                  </p>
                  <p className="text-gray-700 truncate overflow-clip overflow-hidden h-2/4 text-base">
                    {recipe.strCategory}
                  </p>
                </div>
              </div>
            </Link>
          ) : (
            <ForYou />
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
