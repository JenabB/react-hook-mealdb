import React, { useState, useEffect } from "react";

//components
import AppBarWithBack from "../AppBarWithBack";
import MealResult from "./MealResult";

const ByCategory = ({ match }) => {
  const [meals, setMeals] = useState([]);
  let category_id = match.params.strCategory;

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
      <h1 className="text-center my-8">
        Total {meals.length} meals with category {category_id}
      </h1>
      <div className="grid lg:grid-cols-4 grid-cols-2">
        {meals.map((meal, i) => (
          <MealResult meal={meal} key={i} />
        ))}
      </div>
    </div>
  );
};

export default ByCategory;
