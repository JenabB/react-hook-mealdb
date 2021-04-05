import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const ForYou = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`)
      .then((response) => response.json())
      .then((data) => (setMeals(data.meals), console.log(data.meals)))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="grid lg:grid-cols-4 grid-cols-3">
      {meals.map((recipe) => (
        <div key={recipe.idMeal}>
          <Link to={`recipe/${recipe.idMeal}`}>
            <div className="rounded shadow-lg m-1">
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
        </div>
      ))}
    </div>
  );
};

export default ForYou;
