import React from "react";
import { Link } from "react-router-dom";
const Favourite = () => {
  let favourite = JSON.parse(localStorage.getItem("meals"));
  console.log(favourite);
  return (
    <div
      className="w-app h-vh px-2 pb-4"
      style={{ backgroundColor: "rgb(249,248,253)" }}
    >
      <div className="grid grid-cols-2">
        {favourite.map((meal) => (
          <div key={meal.idMeal} className="m-2 bg-white">
            <Link to={`recipe/${meal.idMeal}`}>
              <div className="rounded shadow-lg">
                <img
                  className="rounded-t-lg"
                  src={meal.strMealThumb}
                  alt="Meal"
                  loading="lazy"
                />
                <div className="recipe-information px-2 py-4">
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favourite;
