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
            <div class="rec-container w-card m-2">
              <div class="shadow-top rounded-lg"></div>
              <h1 className="absolute text-white p-2">{meal.strMeal}</h1>
              <div class="img-container">
                <img
                  src={meal.strMealThumb}
                  alt="meal"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default RecommendedItem;
