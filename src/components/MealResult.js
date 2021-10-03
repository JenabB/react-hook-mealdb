import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const MealResult = ({ meal }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="m-2"
    >
      <Link to={`recipe/${meal.idMeal}`}>
        <div className="rounded shadow-lg">
          <img src={meal.strMealThumb} alt="Meal" loading="lazy" />
          <div className="meal-information px-2 py-4">
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
    </motion.div>
  );
};

export default MealResult;
