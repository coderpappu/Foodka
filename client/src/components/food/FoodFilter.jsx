import React, { useState } from "react";
import FilterBtn from "./FilterBtn";

const FoodFilter = () => {
  const [buttonID, setButtonID] = useState(null);

  const idHandler = (id) => {
    setButtonID(id);
  };

  return (
    <div className="flex flex-wrap justify-between items-center mt-8">
      <FilterBtn idFuncClick={idHandler} buttonID={buttonID} genId={1} />
      <FilterBtn idFuncClick={idHandler} buttonID={buttonID} genId={2} />
      <FilterBtn idFuncClick={idHandler} buttonID={buttonID} genId={3} />
      <FilterBtn idFuncClick={idHandler} buttonID={buttonID} genId={4} />
      <FilterBtn idFuncClick={idHandler} buttonID={buttonID} genId={5} />
    </div>
  );
};

export default FoodFilter;
