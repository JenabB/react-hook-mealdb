import React from "react";

//components
import RecommendedItem from "./RecommendedItem";

const Recommended = () => {
  return (
    <div className="px-2 py-2">
      <h1 className="px-4 py-2">Recommended Today</h1>
      <div className="recommended-item flex overflow-auto">
        <RecommendedItem />
        <RecommendedItem />
        <RecommendedItem />
        <RecommendedItem />
        <RecommendedItem />
        <RecommendedItem />
      </div>
    </div>
  );
};

export default Recommended;
