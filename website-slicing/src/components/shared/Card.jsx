import React from "react";

import AyamKoplo from '../../assets/ayam-koplo.png';
import Sangyu from '../../assets/sangyu.png';
import BudeSari from '../../assets/nasi-ayam-bude-sari.png';
import KopiDaripada from '../../assets/kopi-daripada.png';
import { FaArrowRight } from "react-icons/fa6";

export function Card() {
  return (
    <div className=" bg-white flex flex-row justify-center lg:flex-nowrap flex-wrap gap-8 lg:gap-6 2xl:gap-36 py-4">
      <div className="flex flex-col gap-4">
        <img
          className="w-[180px] h-[190px] lg:h-full lg:w-full"
          src={AyamKoplo}
          alt="ayam koplo"
        />
        <div>
          <div className="flex flex-row gap-2">
            <h3 className="font-bold text-sm lg:text-2xl">Ayam Koplo</h3>
            <FaArrowRight className="text-red-hangry text-sm lg:text-xl mt-1 lg:mt-2" />
          </div>
          <h6 className="text-[10px] lg:text-lg text-gray-hangry">
            Ayam Geprek &middot; Indonesia
          </h6>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <img
          className="w-[180px] h-[190px] lg:h-full lg:w-full"
          src={Sangyu}
          alt="san gyu"
        />
        <div>
          <div className="flex flex-row gap-2">
            <h3 className="font-bold text-sm lg:text-2xl">San Gyu</h3>
            <FaArrowRight className="text-red-hangry text-sm lg:text-xl mt-1 lg:mt-2" />
          </div>
          <h6 className="text-[10px] lg:text-lg text-gray-hangry">
            Beef Bowl &middot; Jepang
          </h6>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <img
          className="w-[180px] h-[190px] lg:h-full lg:w-full"
          src={BudeSari}
          alt="bude sari"
        />
        <div>
          <div className="flex flex-row gap-2">
            <h3 className="font-bold text-sm lg:text-2xl">Bude Sari</h3>
            <FaArrowRight className="text-red-hangry text-sm lg:text-xl mt-1 lg:mt-2 hover:scale-110" />
          </div>
          <h6 className="text-[10px] lg:text-lg text-gray-hangry">
            Nasi Ayam &middot; Indonesia{" "}
          </h6>
        </div>
      </div>
      <div className="flex md:hidden flex-col gap-4">
        <img
          className="hover:scale-110 w-[180px]"
          src={KopiDaripada}
          alt="bude sari"
        />
        <div>
          <div className="flex flex-row gap-2">
            <h3 className="font-bold text-s,">Kopi Dari|Pada</h3>
            <FaArrowRight className="text-red-hangry text-sm mt-1 hover:scale-110" />
          </div>
          <h6 className="text-[10px] text-gray-hangry">Minuman &middot; Indonesia</h6>
        </div>
      </div>
    </div>
  );
}
