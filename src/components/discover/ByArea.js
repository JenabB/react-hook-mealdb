import React, { useState, useEffect } from "react";

//components
import AppBarWithBack from "../AppBarWithBack";
import MealResult from "./MealResult";

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
        {meals.map((meal, i) => (
          <MealResult meal={meal} key={i} />
        ))}
      </div>
    </div>
  );
};

export default ByArea;
