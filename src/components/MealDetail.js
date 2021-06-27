import React, { useState, useEffect, useContext } from 'react';
import { GlobalContext } from './hooks/GlobalState';
import { Link, useHistory } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { Helmet } from 'react-helmet';

const MealDetail = ({ match }) => {
  const [meals, setMeals] = useState([]);

  const { addMealToFavourite, removeMealFromFavourite } =
    useContext(GlobalContext);

  let meal_id = match.params.id;
  let history = useHistory();

  let idMeal = meals.idMeal;
  function goBack() {
    history.goBack();
  }

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal_id}`)
      .then((response) => response.json())
      .then((data) => setMeals(data.meals[0]))
      .catch((error) => console.log(error));
  }, [meal_id]);

  return (
    <div
      className="lg:w-app w-full bg-white mx-auto pb-14"
      style={{ backgroundColor: 'rgb(249,248,253)' }}
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>{meals.strMeal}</title>
      </Helmet>
      <button
        className="fixed top-20 left-3 bg-green-400 text-white px-2 py-1 rounded-lg"
        onClick={goBack}
      >
        Back
      </button>

      <button
        className="fixed top-20 right-3 bg-red-400 text-white text-center px-2 py-1 rounded-lg"
        onClick={() => removeMealFromFavourite(idMeal)}
      >
        Remove
      </button>

      <button
        className="fixed top-20 right-20 text-white bg-green-500 text-center px-2 py-1 rounded-lg"
        onClick={() => addMealToFavourite(meals)}
      >
        Add
      </button>

      <div className="lg:w-app w-full bg-white mx-auto pb-14">
        <img src={meals.strMealThumb} alt="meal thumb" loading="lazy" />
        <div className="p-5">
          <h1 className="text-xl font-bold text-green-600">{meals.strMeal}</h1>
          <div className="mt-2 flex">
            <h2 className="m-1 bg-blue-400 px-2 py-1 rounded-lg text-white">
              {meals.strArea}
            </h2>
            <Link to={`/category/${meals.strCategory}`}>
              <h3 className="m-1 bg-green-400 px-2 py-1 rounded-lg text-white">
                {meals.strCategory}
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
                  <td>{meals.strIngredient1}</td>
                  <td>{meals.strMeasure1}</td>
                </tr>
                <tr>
                  <td>{meals.strIngredient2}</td>
                  <td>{meals.strMeasure2}</td>
                </tr>
                <tr>
                  <td>{meals.strIngredient3}</td>
                  <td>{meals.strMeasure3}</td>
                </tr>
                <tr>
                  <td>{meals.strIngredient4}</td>
                  <td>{meals.strMeasure4}</td>
                </tr>
                <tr>
                  <td>{meals.strIngredient5}</td>
                  <td>{meals.strMeasure5}</td>
                </tr>
                <tr>
                  <td>{meals.strIngredient6}</td>
                  <td>{meals.strMeasure6}</td>
                </tr>
                <tr>
                  <td>{meals.strIngredient7}</td>
                  <td>{meals.strMeasure7}</td>
                </tr>
                <tr>
                  <td>{meals.strIngredient8}</td>
                  <td>{meals.strMeasure8}</td>
                </tr>
                <tr>
                  <td>{meals.strIngredient9}</td>
                  <td>{meals.strMeasure9}</td>
                </tr>
                <tr>
                  <td>{meals.strIngredient10}</td>
                  <td>{meals.strMeasure10}</td>
                </tr>
                <tr>
                  <td>{meals.strIngredient11}</td>
                  <td>{meals.strMeasure11}</td>
                </tr>
                <tr>
                  <td>{meals.strIngredient12}</td>
                  <td>{meals.strMeasure12}</td>
                </tr>
                <tr>
                  <td>{meals.strIngredient13}</td>
                  <td>{meals.strMeasure13}</td>
                </tr>
                <tr>
                  <td>{meals.strIngredient14}</td>
                  <td>{meals.strMeasure14}</td>
                </tr>
                <tr>
                  <td>{meals.strIngredient15}</td>
                  <td>{meals.strMeasure15}</td>
                </tr>
                <tr>
                  <td>{meals.strIngredient16}</td>
                  <td>{meals.strMeasure16}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-justify">{meals.strInstructions}</p>
        </div>
        <div className="player-wrapper">
          <ReactPlayer
            url={meals.strYoutube}
            className="react-player"
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </div>
  );
};

export default MealDetail;
