import React, { useState } from "react";
import FilterBtn from "./FilterBtn";
import RamenImg from "../../assets/filterFood/1.png";
import PizzaImg from "../../assets/filterFood/2.png";
import BurgerImg from "../../assets/filterFood/3.png";
import FrenchImg from "../../assets/filterFood/4.png";
import FastFoodImg from "../../assets/filterFood/5.png";
import SoftdrinkImg from "../../assets/filterFood/6.png";

const FoodFilter = () => {
  let initialData = [
    { id: 1, title: "Ramen", img: RamenImg },
    { id: 2, title: "Ramen", img: PizzaImg },
    { id: 3, title: "BurgerImg", img: BurgerImg },
    { id: 4, title: "French fries", img: FrenchImg },
    { id: 5, title: "Fast food", img: FastFoodImg },
    { id: 6, title: "Soft drinks", img: SoftdrinkImg },
  ];
  const [buttonID, setButtonID] = useState(null);

  const idHandler = (id) => {
    setButtonID(id);
  };

  return (
    <div className="flex flex-wrap justify-between items-center mt-8">
      {initialData.map((data) => (
        <FilterBtn
          btnData={data}
          idFuncClick={idHandler}
          buttonID={buttonID}
          genId={data.id}
        />
      ))}
    </div>
  );
};

export default FoodFilter;
