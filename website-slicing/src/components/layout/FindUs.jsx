import React from "react";
import Gofood from "../../assets/gofood-logo.png";
import Grabfood from "../../assets/grabfood-logo.png";
import Zomato from "../../assets/zomato-logo.png";
import Eats from "../../assets/eats-logo.png";

export function FindUs() {
  return (
    <>
      <div className="bg-white text-center flex flex-col items-center space-y-10 mt-[80rem] py-20 md:py-60 sm:py-52 sm:mt-28 md:mt-32">
        <p className="text-black-hangry md:text-sm text-xs">Hangry! dapat kamu temukan di</p>
        <div className="flex md:space-x-20 sm:space-x-12 space-x-8 mx-2 md:mx-10" id="delivery">
          <img src={Gofood} alt="GoFood Logo" className="md:h-8 sm:h-6 h-3" />
          <img src={Grabfood} alt="GrabFood Logo" className="md:h-8 sm:h-6 h-3" />
          <img src={Zomato} alt="Zomato Logo" className="md:h-8 sm:h-6 h-3" />
          <img src={Eats} alt="Eats Logo" className="md:h-8 sm:h-6 h-3" />
        </div>
      </div>
    </>
  );
}
