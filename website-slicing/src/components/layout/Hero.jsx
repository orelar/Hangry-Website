import { ButtonAppStore } from "../shared/ButtonAppStore";
import { ButtonGooglePlay } from "../shared/ButtonGooglePlay";
import Mockup from "../../assets/mockup-phone.svg";

export function Hero() {
  return (
    <div className="flex flex-row py-12 lg:px-32 px-8 h-[37rem] sm:h-[29rem] bg-gray-50 overflow-y-hidden overflow-x-hidden">
      <div className="flex flex-col z-20 text-black-secondary-hangry font-bold gap-8 py-14 lg:py-28 ">
        <div className="flex flex-col gap-4">
          <h6 className="text-sm lg:text-xl">Kamu lapar atau haus?</h6>
          <h1 className="text-2xl lg:text-5xl w-[50%] lg:w-[90%] pb-8">
            Tenang... ada Hangry! yang siap mengatasi
          </h1>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <ButtonGooglePlay />
          <ButtonAppStore />
        </div>
      </div>
      <div>
        <img
          className="absolute sm:left-80 md:left-[350px] lg:left-16 lg:relative lg:w-[850px] sm:w-2/5 w-[18rem] z-0 left-52 sm:z-0 "
          src={Mockup}
          alt="Mockup iPhone"
        />
      </div>
    </div>
  );
}
