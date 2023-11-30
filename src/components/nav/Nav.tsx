import React, { useState } from "react";
import { navItemsPublic } from "./NavItems";
import Link from "next/link";
import Logo from "../logo/Logo";
import LightPrimaryButton from "../buttons/LightPrimaryButton";
import { useRouter } from "next/router";
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const path = useRouter().pathname;
  return (
    <nav className="flex items-center justify-between flex-wrap p-2 px-6 bg-primary-900 lg:px-20 ">
      <Link href="/" className="w-36 lg:w-52 mb-4">
        <Logo />
      </Link>
      <div className="block sm:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 rounded text-white"
        >
          <svg
            className={`fill-current h-8 w-8 ${isOpen ? "hidden" : "block"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
          <svg
            className={`fill-current h-8 w-8 ${isOpen ? "block" : "hidden"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
          </svg>
        </button>
      </div>
      <div
        className={`w-full flex flex-col gap-6 mt-4 sm:flex-row sm:mt-0 sm:justify-center flex-grow sm:flex sm:items-center sm:w-auto ${
          isOpen ? "flex" : "hidden"
        }`}
      >
        {navItemsPublic.map((item) => {
          return (
            <Link key={item.path} href={item.path} className="w-500">
              <button
                className={`"text-white p-4 rounded hover:bg-gray-700 transition-colors duration-150 ${
                  path === item.path ? "text-white" : "text-gray-400"
                }`}
                key={item.label}
              >
                {item.label}
              </button>
            </Link>
          );
        })}
      </div>
      <Link href="/kontakt" className="w-52 hidden lg:block">
        <LightPrimaryButton>Kontakt oss</LightPrimaryButton>
      </Link>
    </nav>
  );
};
export default Nav;
