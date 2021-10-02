import React, { useState, useEffect } from "react";
import ForYou from "./ForYou";
import { Link } from "react-router-dom";

const Search = () => {
  const [search, setSearch] = useState("");
  const [recipe, setRecipe] = useState([]);

  const handleChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      .then((response) => response.json())
      .then((data) => setRecipe(data.meals))
      .catch((error) => console.log(error));
  }, [search]);

  return (
    <div className="p-4">
      <div className="text-center">
        <form>
          <input
            type="search"
            className="bg-purple-100 px-3 py-2 shadow rounded-full border-0"
            value={search}
            placeholder="search for meal"
            onChange={handleChangeSearch}
          />
        </form>
      </div>

      <div className="search-container">
        <div className="mt-4">
          {search ? (
            <div className="grid grid-cols-4 sm:grid-cols-3">
              {recipe ? (
                recipe.map((meal) => (
                  <Link to={`recipe/${meal.idMeal}`}>
                    <div className="rounded shadow-lg m-1">
                      <img
                        className="rounded-t-lg"
                        src={meal.strMealThumb}
                        alt="Meal"
                        loading="lazy"
                      />
                      <div className="meal-information px-2 py-4">
                        <div className="text-sm truncate">{meal.strMeal}</div>
                        <p className="text-gray-700 truncate overflow-clip overflow-hidden h-2/4 text-base">
                          {meal.strArea}
                        </p>
                        <p className="text-gray-700 truncate overflow-clip overflow-hidden h-2/4 text-base">
                          {meal.strCategory}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))
              ) : (
                <div className="py-20 text-center">
                  <h1 className="text-center">No meal found</h1>
                </div>
              )}
            </div>
          ) : (
            <ForYou />
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
