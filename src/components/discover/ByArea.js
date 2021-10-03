import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

//components
import AppBarWithBack from "../AppBarWithBack";

const ByArea = ({ match }) => {
  //state
  const [meals, setMeals] = useState([]);

  //get area by click
  let area = match.params.strArea;

  //get meals data by area
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
      .then((response) => response.json())
      .then((data) => setMeals(data.meals))
      .catch((error) => console.log(error));
  }, [area]);

  return (
    <div
      className="lg:w-app w-full bg-white mx-auto pb-14"
      style={{ backgroundColor: "rgb(249,248,253)" }}
    >
      <AppBarWithBack />
      <h1 className="text-center my-8">
        Total {meals.length} meals in {area}
      </h1>
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

export default ByArea;
