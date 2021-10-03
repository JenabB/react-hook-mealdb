import React, { useState, useEffect } from "react";

//components
import MealResult from "../MealResult";

const ForYou = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`)
      .then((response) => response.json())
      .then((data) => setMeals(data.meals))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="grid lg:grid-cols-3 grid-cols-2">
      {meals.map((meal, i) => (
        <MealResult key={i} meal={meal} />
      ))}
    </div>
  );
};

export default ForYou;
