import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const RecommendedItem = () => {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
      .then((response) => response.json())
      .then((data) => setMeals(data.meals))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      {meals.map((meal) => (
        <Link to={`recipe/${meal.idMeal}`}>
          <div>
            <div
              key={meal.idMeal}
              className="w-card h-card shadow-lg m-2 bg-white rounded-lg "
              style={{
                backgroundImage: `url(${meal.strMealThumb})`,
                backgroundSize: "cover",
              }}
            >
              <div className="recipe-meta p-4">
                <h1 className="text-lg text-white font-black">
                  {meal.strMeal}
                </h1>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default RecommendedItem;
