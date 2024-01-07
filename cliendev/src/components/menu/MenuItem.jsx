import React from "react";

const MenuItem = () => {
  return (
    <ul className="flex ">
      <li className="font-medium mr-10 text-base font-medium leading-[50px] text-[#]">
        <a href="#">HOME</a>
      </li>
      <li className="font-medium mr-10 text-base font-medium leading-[50px]">
        <a href="#">SHOP</a>
      </li>
      <li className="font-medium mr-10 text-base font-medium leading-[50px]">
        <a href="#">BLOG</a>
      </li>
      <li className="font-medium mr-10 text-base font-medium leading-[50px]">
        <a href="#">ABOUT US</a>
      </li>
      <li className="font-medium mr-10 text-base font-medium leading-[50px]">
        <a href="#">CONTACTS</a>
      </li>
    </ul>
  );
};

export default MenuItem;
