import React, { useState, useEffect } from 'react';
import MealResult from '../MealResult';

const ForYou = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`)
      .then((response) => response.json())
      .then((data) => setMeals(data.meals))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="grid lg:grid-cols-4 grid-cols-3">
      {meals.map((meal) => (
        <div key={meal.idMeal}>
          <MealResult meal={meal} />
        </div>
      ))}
    </div>
  );
};

export default ForYou;
