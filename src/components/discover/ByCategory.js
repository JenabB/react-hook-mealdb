import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AppBarWithBack from "../AppBarWithBack";

const ByCategory = ({ match }) => {
  const [meals, setMeals] = useState([]);
  let category_id = match.params.strCategory;
  console.log(meals);
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category_id}`)
      .then((response) => response.json())
      .then((data) => setMeals(data.meals))
      .catch((error) => console.log(error));
  }, [category_id]);

  return (
    <div
      className="lg:w-app w-full bg-white mx-auto pb-14"
      style={{ backgroundColor: "rgb(249,248,253)" }}
    >
      <AppBarWithBack />
      <div className="grid lg:grid-cols-4 grid-cols-2">
        {meals.map((recipe) => (
          <div key={recipe.idMeal}>
            <Link to={`/recipe/${recipe.idMeal}`}>
              <div className="rounded shadow-lg m-1 bg-white">
                <img
                  className="rounded-t-lg"
                  src={recipe.strMealThumb}
                  alt="Meal"
                  loading="lazy"
                />
                <div className="recipe-information px-2 py-4">
                  <div className="text-sm truncate">{recipe.strMeal}</div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ByCategory;
