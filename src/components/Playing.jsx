import { Next, Play, Previous, Shuffle } from "iconsax-react";
import React from "react";
import imager from "../assets/5.png";

const Playing = () => {
  return (
    <div className=" items-center flex bottom-0 fixed w-full h-[15vh] bg-darkGlass backdrop-blur-lg">
      <img src={imager} className="w-[70px] h-[70px] ml-10 my-7" />
      <div className="ml-3">
        <h3 className="font-extralight">Seasons in </h3>
        <p className="font-extralight text-xs">james</p>
      </div>
      <div className="flex absolute right-10">
        <Previous variant="Bold" className="ml-5" />
        <Play variant="Bold" className="ml-5" />
        <Next variant="Bold" className="ml-5" />
      </div>
    </div>
  );
};

export default Playing;
