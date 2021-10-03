/* eslint-disable import/no-anonymous-default-export */
export default (state, action) => {
  switch (action.type) {
    case "ADD_MEAL_TO_FAVOURITE":
      return {
        ...state,
        meals: state.meals.find((el) => el.idMeal === action.payload.idMeal)
          ? state.meals
          : [action.payload, ...state.meals],
      };
    case "REMOVE_MEAL_FROM_FAVOURITE":
      return {
        ...state,
        meals: state.meals.filter((meal) => meal.idMeal !== action.payload),
      };

    default:
      return state;
  }
};
