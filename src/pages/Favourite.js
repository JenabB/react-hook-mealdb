import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Favourite = () => {
  let favourite = JSON.parse(localStorage.getItem("meals"));
  console.log(favourite);
  return (
    <div
      className="w-app bg-white mx-auto pb-14 h-vh"
      style={{ backgroundColor: "rgb(249,248,253)" }}
    >
      <Helmet>
        <title>Favourite</title>
      </Helmet>
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
