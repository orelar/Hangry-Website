import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

import logoHangry from "../../assets/hangry-logo.png";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav
      id="navbar"
      className="sticky bg-white left-0 top-0 z-50 w-full md:shadow-sm shadow md:static"
    >
      <div className="base-container z-10 flex sm:mr-10 mr-32 justify-between items-center py-5 md:py-3">
        <div className="flex items-center ml-5 sm:ml-10 md:ml-20">
          <Link to="/">
            <img
              id="logo-hangry-navbar"
              src={logoHangry}
              alt="logo"
              className="w-20 cursor-pointer sm:w-24 md:w-36"
            />
          </Link>
        </div>

        <div>
          {isOpen ? (
            <IoCloseSharp
              id="close-dropdown"
              className="absolute right-8 top-6 cursor-pointer text-lg text-black-hangry md:hidden"
              onClick={handleOpen}
            />
          ) : (
            <GiHamburgerMenu
              id="open-dropdown"
              className="absolute right-8 top-6 cursor-pointer text-lg text-black-hangry md:hidden"
              onClick={handleOpen}
            />
          )}
        </div>
        <ul
          id="list-menu-navbar"
          className={`absolute bg-white mr-4 left-0 -z-10 w-full pb-5 font-semibold
      text-black-hangry md:static md:z-auto md:flex md:w-auto md:items-center md:gap-6 md:pb-0 md:pl-0 lg:gap-11 ${
        isOpen ? "top-16" : "top-[-300px] hidden"
      }`}
        >
          <li className="md:text-md mt-6 text-sm md:my-0 md:hover:bg-transparent">
            <a
              id="link-home-navbar"
              href="#"
              className="ms-16 duration-200 hover:text-red-400 md:ms-0"
            >
              Tentang Kami
            </a>
          </li>
          <li className="md:text-md mt-6 text-sm md:my-0 md:hover:bg-transparent">
            <a
              id="link-about-navbar"
              href="#"
              className="ms-16 duration-200 hover:text-red-400 md:ms-0"
            >
              Semua Outlet
            </a>
          </li>
          <li className="md:text-md mt-6 text-sm md:my-0 md:hover:bg-transparent">
            <a
              id="link-service-navbar"
              href="#"
              className="ms-16 duration-200 hover:text-red-400 md:ms-0"
            >
              Promo
            </a>
          </li>
          <li className="md:text-md mt-6 text-sm md:my-0 md:hover:bg-transparent">
            <a
              id="link-benefit-navbar"
              href="#"
              className="ms-16 duration-200 hover:text-red-400 md:ms-0"
            >
              Karier
            </a>
          </li>
          <li className="md:text-md ms-16 mt-6 text-sm text-red-hangry md:my-0 md:ms-0 md:hover:bg-transparent">
            <Link to="/">
              <a
                id="link-benefit-navbar"
                href="#"
                className="duration-200 hover:text-red-400 md:ms-0"
              >
                Download App
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
