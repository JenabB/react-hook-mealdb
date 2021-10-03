import React from "react";
import { Link } from "react-router-dom";

const MealResult = ({ meal }) => {
  return (
    <div>
      <Link to={`/recipe/${meal.idMeal}`}>
        <div className="rounded shadow-lg m-1 bg-white">
          <img
            className="rounded-t-lg"
            src={meal.strMealThumb}
            alt="Meal"
            loading="lazy"
          />
          <div className="recipe-information px-2 py-4">
            <div className="text-sm truncate">{meal.strMeal}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MealResult;
