import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

//initial state
const initialState = {
  meals: localStorage.getItem("meals")
    ? JSON.parse(localStorage.getItem("meals"))
    : [],
};

//create context
export const GlobalContext = createContext(initialState);

//provider components
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("meals", JSON.stringify(state.meals));
  }, [state]);

  //actions
  const addMealToFavourite = (meals) => {
    dispatch({ type: "ADD_MEAL_TO_FAVOURITE", payload: meals });
  };

  const removeMealFromFavourite = (idMeal) => {
    dispatch({ type: "REMOVE_MEAL_FROM_FAVOURITE", payload: idMeal });
  };

  return (
    <GlobalContext.Provider
      value={{
        meals: state.meals,
        addMealToFavourite,
        removeMealFromFavourite,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
