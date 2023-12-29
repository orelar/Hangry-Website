import React from "react";
import { Card } from "../shared/Card";

export function Restaurants() {
  return (
    <>
      <div className="md:px-20 bg-white w-full space-y-3 py-10 flex flex-col gap-4 px-8 lg:px-32 bg-red h-[70vh] text-black-hangry">
        <h1 className="text-4xl py-2 font-bold ">
          Hangry! adalah restoran dengan beragam brand
        </h1>
        <h6 className="text-xl text-black-hangry ">
          Kami menyajikan beragam brand untuk menemani setiap waktu santapmu
        </h6>
        <Card />
      </div>
    </>
  );
}
