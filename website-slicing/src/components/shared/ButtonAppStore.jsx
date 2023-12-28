import { Link } from "react-router-dom";
import { AiFillApple } from "react-icons/ai";

export function ButtonAppStore() {
  return (
    <Link
      to="/"
    >
      <button
        id="button-app-store"
        className=" w-fit md:w-auto m-1 flex rounded-md bg-black p-1 pe-5 ps-2 text-white hover:bg-opacity-95"
      >
        <span className="text-4xl">
          <AiFillApple />
        </span>
        <span className="ms-2 block">
          <div className="text-[0.5rem] md:text-xs">Download on the</div>
          <div className="text-sm md:text-xl">App Store</div>
        </span>
      </button>
    </Link>
  );
}
