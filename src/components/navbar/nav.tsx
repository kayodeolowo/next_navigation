"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navData } from "./data";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const currentRoute = usePathname();

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <nav className=" md:flex items-center justify-around bg-white py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center">
          <Link className="font-bold text-2xl" href={"/"}>
            DevCT
          </Link>
        </div>

        <div className="text-3xl absolute right-2 top-2 cursor-pointer md:hidden">
          <button
            className="focus:outline-none w-8 h-8 overflow-hidden "
            onClick={handleClick}
          >
            <span
              className={`bg-black transition-all duration-300 ease-in-out  block h-0.5 w-6 ${
                isOpen ? "rotate-45 translate-y-1" : "-translate-y-1"
              }`}
            ></span>
            <span
              className={`bg-black transition-all duration-300 ease-in-out  block h-0.5 w-6  my-0.5 ${
                isOpen
                  ? "-translate-x-5 opacity-0"
                  : "translate-x-0  opacity-100"
              }`}
            ></span>
            <span
              className={`bg-black transition-all duration-300 ease-in-out  block h-0.5 w-6 rounded-sm  ${
                isOpen ? " -rotate-45 -translate-y-1" : "translate-y-1"
              } `}
            ></span>
          </button>
        </div>

        <ul
          className={`w-full  bg-white  pb-12 absolute   md:flex md:items-center md:pb-0 md:static  -z-10 md:z-auto  md:w-auto md:pl-0 pl-9 transition-all duration-500 ease top-20 ${
            isOpen ? " left-0" : " -left-full "
          }`}
        >
          {navData.map((link) => (
            <li
              key={link.id}
              onClick={() => setIsOpen(false)}
              className="md:ml-8 text-xl md:my-0 my-7"
            >
              <Link
                href={link.url}
                className={`  ${
                  currentRoute === link.url ? "text-red-500" : "text-slate-500"
                }`}
              >
                {link.title}{" "}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
