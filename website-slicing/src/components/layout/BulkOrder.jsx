import React from "react";
import { FaCheck } from "react-icons/fa";
import BulkOrderImage from "../../assets/bulk-order.png";

export function BulkOrder() {
  return (
    <div className="flex flex-col-reverse mx-5 sm:mx-10 md:mx-20 mb-5 sm:flex-row text-black-hangry">
      {/* Left side content */}
      <div id="bulk-content" className="md:flex-1 md:w-72 md:pr-8 sm:space-y-6 space-y-9 mt-3">
        <h2 className="font-bold text-2xl">Makin rame, makin hemat!</h2>
        <p className=" text-sm font-normal text-black-secondary-hangry">
          Nikmati keuntungan dengan minimum pembelian 20 porsi menu apa aja.
          Cocok untuk hidangan segala acara!
        </p>
        <div className="flex space-x-4 mt-8">
          <FaCheck className="text-red-hangry font-bold" size={"1.5em"} />
          <h3>Beragam pilihan menu</h3>
        </div>
        <div className="flex space-x-4 mt-8">
          <FaCheck className="text-red-hangry font-bold" size={"1.5em"} />
          <h3>Semua menu diskon 20%</h3>
        </div>
        <div className="flex space-x-4 mt-8">
          <FaCheck className="text-red-hangry font-bold" size={"1.5em"} />
          <div>
            <h3>Gratis biaya kirim</h3>
            <p className="text-black-secondary-hangry">*Syarat & ketentuan berlaku</p>
          </div>
        </div>
        <button className="mb-2 mt-4 h-10 w-full md:w-auto rounded-lg bg-red-hangry text-sm text-white sm:px-7 sm:text-base sm:font-medium">
          Pesan sekarang
        </button>
      </div>

      {/* Right side image */}
      <div className="">
        <img src={BulkOrderImage} alt="Bulk Order Image" className="w-full sm:w-full sm:mt-5 md:max-w-[75%]" />
      </div>
    </div>
  );
}
