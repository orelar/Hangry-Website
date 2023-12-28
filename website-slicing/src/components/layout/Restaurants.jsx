import React from "react";
import { Card } from "../shared/Card";

export function Restaurants() {
  return (
    <>
      <div className="px-5 md:px-20 z-[100] bg-white w-full space-y-3 py-10">
        <h2 className=" font-bold text-lg sm:text-2xl md:text-4xl">Hangry! adalah restoran dengan beragam brand</h2>
        <p className="text-black-secondary-hangry text-sm sm:text-base md:text-lg">
          Kami menyajikan beragam brand untuk menemani setiap waktu santapmu
        </p>
        <Card />
      </div>
    </>
  );
}
