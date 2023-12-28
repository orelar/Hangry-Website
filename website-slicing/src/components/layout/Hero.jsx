import { ButtonAppStore } from "../shared/ButtonAppStore";
import { ButtonGooglePlay } from "../shared/ButtonGooglePlay";
import Mockup from "../../assets/iphone-mockup.png";

export function Hero() {
  return (
    <div className="bg-gray-50 -z-10 w-full md:py-28 sm:py-8 py-10 md:space-y-8 flex md:flex-row px-5 md:px-20 justify-between relative">
      <div className="flex flex-col w-fit h-fit md:w-1/2 space-y-4 md:space-y-10 self-start text-left text-black-hangry font-bold md:text-left md:self-center">
        <p className="md:text-xl text-sm">Kamu laper atau haus?</p>
        <p className="md:text-4xl text-lg md:w-full w-1/2">Tenang... ada Hangry! yang siap mengatasi</p>
        <div className="flex flex-col self-start md:flex-row md:space-x-5 md:self-start">
          <ButtonGooglePlay />
          <ButtonAppStore />
        </div>
      </div>

      <div className="sm:pt-28 md:w-2/3 right-0 block md:mx-11 mx-2">
        <div className="relative">
          <img
            src={Mockup}
            alt="handphone"
            className="md:top-44 w-full end-1 sm:end-10 sm:w-1/5 md:w-1/2 absolute transform -translate-y-1/2"
          />
        </div>
      </div>
    </div>
  );
}