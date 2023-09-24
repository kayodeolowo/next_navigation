"use client"
import { useState } from "react";
import Link from "next/link";


export default function Header() {
  const [navbar, setNavbar] = useState<boolean>(false);


  const handleNav = () => {
    setNavbar(!navbar);
  };


  return (
    <div className="bg-gray-400  ">
      <div>
        <div>
          <div className="justify-between  mx-auto  md:items-center md:flex ">
            <div>
              <div className="flex items-center justify-between py-3 md:py-5 md:block">
                <div className=' hover:cursor-pointer flex flex-row ml-2 md:ml-4  space-x-1   items-center'>
                  <img src='./images/logo.jpg' alt='logo'
                    className='md:h-10 h-9' />
                  <h1 className=' text-lg  leading-4 font-semibold text-black'> Header </h1>
                </div>


                  {/* Mobile menu icons to open and close menu */}
                <div className="md:hidden">
                  <button
                    className="p-2 text-black rounded-md outline-none "
                    onClick={() => setNavbar(!navbar)}
                  >
                    {navbar ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-black"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-black"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div
                className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                  }`}
              >

                <ul className="  py-2 px-8 rounded-full items-center justify-center text-sm space-y-8 md:flex md:space-x-6 md:space-y-0">
                  <Link onClick={handleNav} href='/'>

                    <p className=" hover:text-primaryblue duration-300 ease-in  hover:border-b-2 hover:border-primarypurple hover:cursor-pointer font-semibold text-blue-700 " >Home</p>

                  </Link>

                  <Link onClick={handleNav} href='/about'>
                    <p className=" hover:text-primaryblue mt-8 md:mt-0 duration-300 ease-in  hover:border-b-2 hover:border-primarypurple hover:cursor-pointer text-blue-700  font-semibold">
                      About
                    </p>
                  </Link>

                  <Link onClick={handleNav} href='/contact'>
                    <p className=" hover:text-primaryblue mt-8 md:mt-0 duration-300 ease-in  hover:border-b-2 hover:border-primarypurple hover:cursor-pointer text-blue-700  font-semibold">
                      Contact
                    </p>
                  </Link>

                 
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}