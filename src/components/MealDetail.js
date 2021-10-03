import React, { useState, useEffect, useContext } from "react";
import { GlobalContext } from "./hooks/GlobalState";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import { Helmet } from "react-helmet";
import AppBarWithBack from "./AppBarWithBack";
import { motion } from "framer-motion";

const MealDetail = ({ match }) => {
  const [meal, setMeal] = useState([]);

  const { meals, addMealToFavourite, removeMealFromFavourite } =
    useContext(GlobalContext);

  let meal_id = match.params.id;

  let idMeal = meal.idMeal;

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal_id}`)
      .then((response) => response.json())
      .then((data) => setMeal(data.meals[0]))
      .catch((error) => console.log(error));
  }, [meal_id]);

  const selected = meals.find((el) => el.idMeal === meal_id);

  const isFavorited = selected ? true : false;

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          scale: 0.8,
          opacity: 0,
        },
        visible: {
          scale: 1,
          opacity: 1,
          transition: {
            delay: 0.4,
          },
        },
      }}
      className="lg:w-app w-full bg-white mx-auto pb-14"
      style={{ backgroundColor: "rgb(249,248,253)" }}
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>{meal.strMeal}</title>
      </Helmet>
      <AppBarWithBack />

      {isFavorited ? (
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="fixed top-20 right-5 bg-yellow-400 text-center px-2 py-1 rounded-lg"
          onClick={() => removeMealFromFavourite(idMeal)}
        >
          <h1 className="material-icons">favorite_border</h1>
        </motion.button>
      ) : (
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="fixed top-20 right-5 bg-yellow-400 text-center px-2 py-1 rounded-lg"
          onClick={() => addMealToFavourite(meal)}
        >
          <h1 className="material-icons">favorite</h1>
        </motion.button>
      )}

      <div className="lg:w-app w-full bg-white mx-auto pb-14">
        <img src={meal.strMealThumb} alt="meal thumb" loading="lazy" />
        <div className="p-5">
          <h1 className="text-xl font-bold">{meal.strMeal}</h1>
          <div className="mt-2 flex">
            <Link to={`/area/${meal.strArea}`}>
              <h2 className="m-1 bg-blue-400 px-2 py-1 rounded-lg text-white">
                {meal.strArea}
              </h2>
            </Link>
            <Link to={`/category/${meal.strCategory}`}>
              <h3 className="m-1 bg-green-400 px-2 py-1 rounded-lg text-white">
                {meal.strCategory}
              </h3>
            </Link>
          </div>

          <div className="ingredient mx-20 my-5">
            <table class="table-auto">
              <thead>
                <tr>
                  <th>Ingredient</th>
                  <th>Meausure</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{meal.strIngredient1}</td>
                  <td>{meal.strMeasure1}</td>
                </tr>
                <tr>
                  <td>{meal.strIngredient2}</td>
                  <td>{meal.strMeasure2}</td>
                </tr>
                <tr>
                  <td>{meal.strIngredient3}</td>
                  <td>{meal.strMeasure3}</td>
                </tr>
                <tr>
                  <td>{meal.strIngredient4}</td>
                  <td>{meal.strMeasure4}</td>
                </tr>
                <tr>
                  <td>{meal.strIngredient5}</td>
                  <td>{meal.strMeasure5}</td>
                </tr>
                <tr>
                  <td>{meal.strIngredient6}</td>
                  <td>{meal.strMeasure6}</td>
                </tr>
                <tr>
                  <td>{meal.strIngredient7}</td>
                  <td>{meal.strMeasure7}</td>
                </tr>
                <tr>
                  <td>{meal.strIngredient8}</td>
                  <td>{meal.strMeasure8}</td>
                </tr>
                <tr>
                  <td>{meal.strIngredient9}</td>
                  <td>{meal.strMeasure9}</td>
                </tr>
                <tr>
                  <td>{meal.strIngredient10}</td>
                  <td>{meal.strMeasure10}</td>
                </tr>
                <tr>
                  <td>{meal.strIngredient11}</td>
                  <td>{meal.strMeasure11}</td>
                </tr>
                <tr>
                  <td>{meal.strIngredient12}</td>
                  <td>{meal.strMeasure12}</td>
                </tr>
                <tr>
                  <td>{meal.strIngredient13}</td>
                  <td>{meal.strMeasure13}</td>
                </tr>
                <tr>
                  <td>{meal.strIngredient14}</td>
                  <td>{meal.strMeasure14}</td>
                </tr>
                <tr>
                  <td>{meal.strIngredient15}</td>
                  <td>{meal.strMeasure15}</td>
                </tr>
                <tr>
                  <td>{meal.strIngredient16}</td>
                  <td>{meal.strMeasure16}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-justify">{meal.strInstructions}</p>
        </div>
        <div className="player-wrapper">
          <ReactPlayer
            url={meal.strYoutube}
            className="react-player"
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default MealDetail;
