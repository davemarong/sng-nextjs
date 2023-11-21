import { Button } from "@mui/material";
import Link from "next/link";
import React from "react";
import { navItemsPublic } from "../nav/NavItems";
import Logo from "../logo/Logo";
import CircleIcon from "@mui/icons-material/Circle";
import PrimaryButton from "../buttons/PrimaryButton";
import { useRouter } from "next/router";

const Footer = () => {
  const path = useRouter().pathname;

  return (
    <>
      <div className="bg-gray-800  flex flex-col px-8 items-center justify-between py-8 lg:px-20 lg:flex-row">
        <div className="flex-1">
          <Logo />
        </div>
        <div className="flex flex-col flex-5 pt-8 items-center gap-10 lg:gap-48 lg:flex-row">
          <div className="flex flex-row justify-center">
            {navItemsPublic.map((item) => {
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`text-gray-400 p-4 rounded hover:bg-gray-700 transition-colors duration-150 ${
                    path === item.path ? "text-white" : "text-gray-400"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
          <div className="flex flex-col justify-evenly leading-9">
            <p className="text-gray-400">46807041</p>
            <p className="text-gray-400">sng@sng.com</p>
            <p className="text-gray-400">25 Kongens gate, 0485 Oslo</p>
          </div>
        </div>
        <div className="flex-1 flex justify-end mt-8">
          <PrimaryButton>Kontakt oss</PrimaryButton>
        </div>
      </div>
      <div className="bg-gray-900 h-100 flex justify-between items-center px-20">
        <p className="text-gray-500 text-sm">Copyright SNG 2023</p>
        <p className="text-gray-500 text-sm">Marong Utvikling</p>
        {/* <div>
          <CircleIcon className="text-white" />
          <CircleIcon className="text-white" />
          <CircleIcon className="text-white" />
        </div> */}
      </div>
    </>
  );
};

export default Footer;
