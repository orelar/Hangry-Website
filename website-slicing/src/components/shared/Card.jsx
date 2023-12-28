import React from "react";
import AyamKoploFood from "../../assets/ayam-koplo-foods.png";
import AyamKoploLogo from "../../assets/ayam-koplo-logo.png";
import SangyuFood from "../../assets/sangyu-foods.png";
import SangyuLogo from "../../assets/sangyu-logo.png";
import NasiAyamBudeSariFood from "../../assets/nasi-ayam-bude-sari-foods.png";
import NasiAyamBudeSariLogo from "../../assets/nasi-ayam-bude-sari-logo.png";
import KopiDariPadaFood from "../../assets/kopi-dari-pada-foods.png";
import KopiDariPadaLogo from "../../assets/kopi-dari-pada-logo.png";
import { FaArrowRight } from "react-icons/fa6";

export function Card() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 md:my-10 my-4">
      <div className="relative inline-block" id="card-1">
        <img
          src={AyamKoploLogo}
          alt="Ayam Koplo Logo"
          className="z-20 absolute -top-2 md:top-0 left-7 mt-7 md:h-16 h-8"
        />
        <img
          src={AyamKoploFood}
          alt="Ayam Koplo Foods"
          className="z-10 relative md:right-6 md:w-3/4"
        />
        <div className="flex items-center space-x-3 ">
          <h3 className="font-bold md:text-xl text-xs ml-5">Ayam Koplo</h3>
          <FaArrowRight className="text-red-hangry" size={"1em"} />
        </div>
        <p className="ml-5 md:text-[0.75rem] text-[0.55rem] sm:text-[0.65rem] w-full">Ayam Geprek &middot; Indonesia</p>
      </div>

      <div className="relative inline-block" id="card-2">
        <img
          src={SangyuLogo}
          alt="Sangyu Logo"
          className="z-20 absolute -top-2 md:top-0 left-7 mt-7 md:h-16 h-8"
        />
        <img
          src={SangyuFood}
          alt="Sangyu Foods"
          className="z-10 relative md:right-9 md:w-1/2"
        />
        <div className="flex items-center space-x-3">
          <h3 className="font-bold md:text-xl text-xs ml-5">San Gyu</h3>
          <FaArrowRight className="text-red-hangry" size={"1em"} />
        </div>
        <p className="ml-5 md:text-[0.75rem] text-[0.55rem] sm:text-[0.65rem] w-full">BeefBowl &middot; Jepang</p>
      </div>

      <div className="relative inline-block" id="card-3">
        <img
          src={NasiAyamBudeSariLogo}
          alt="Nasi Ayam Bude Sari Logo"
          className="z-20 absolute -top-2 md:top-0 left-7 mt-7 md:h-16 h-8"
        />
        <img
          src={NasiAyamBudeSariFood}
          alt="Nasi Ayam Bude Sari Foods"
          className="z-10 relative md:right-9 md:w-1/2"
        />
        <div className="flex items-center space-x-3">
          <h3 className="font-bold md:text-xl text-xs ml-5">Bude Sari</h3>
          <FaArrowRight className="text-red-hangry" size={"1em"} />
        </div>
        <p className="ml-5 md:text-[0.75rem] text-[0.55rem] sm:text-[0.65rem] w-full">Nasi Ayam &middot; Indonesia</p>
      </div>

      <div className="relative inline-block sm:hidden lg:hidden md:hidden" id="card-4">
        <img
          src={KopiDariPadaLogo}
          alt="Kopi Dari Pada Logo"
          className="z-20 absolute -top-2 md:top-0 left-7 mt-7 md:h-16 h-8"
        />
        <img
          src={KopiDariPadaFood}
          alt="Kopi Dari Pada Foods"
          className="z-10 relative md:right-9 md:w-96 w-52"
        />
        <div className="flex items-center space-x-3">
          <h3 className="font-bold md:text-xl text-xs ml-5">Kopi Dari|Pada</h3>
          <FaArrowRight className="text-red-hangry" size={"1em"} />
        </div>
        <p className="ml-5 md:text-[0.75rem] text-[0.55rem] sm:text-[0.65rem] w-full">Minuman &middot; Indonesia</p>
      </div>
    </div>
  );
}
