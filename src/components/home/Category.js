import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Category = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/list.php?c=list")
      .then((response) => response.json())
      .then((data) => setCategories(data.meals))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="category-container flex overflow-auto">
      {categories.map((category) => (
        <div className="m-2 bg-blue-100 p-1 px-2 rounded-lg">
          <Link to={`category/${category.strCategory}`}>
            {category.strCategory}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Category;
