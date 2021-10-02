import React from "react";
import { useHistory } from "react-router-dom";

const AppBarWithBack = () => {
  let history = useHistory();

  return (
    <div className="bg-yellow-400 w-full p-4 flex text-center sticky top-0 z-10">
      <h1 className="material-icons" onClick={() => history.goBack()}>
        arrow_back
      </h1>
      <div></div>
      <div></div>
    </div>
  );
};

export default AppBarWithBack;
