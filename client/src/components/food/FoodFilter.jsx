import React from "react";
import FilterBtn from "./FilterBtn";

const FoodFilter = () => {
  return (
    <div className="flex flex-wrap justify-between items-center mt-8">
      <FilterBtn />
      <FilterBtn />
      <FilterBtn />
      <FilterBtn />
      <FilterBtn />
    </div>
  );
};

export default FoodFilter;
