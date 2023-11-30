import { Button } from "@mui/material";
import Link from "next/link";
import React from "react";
import { navItemsPublic } from "../nav/NavItems";
import Logo from "../logo/Logo";
import CircleIcon from "@mui/icons-material/Circle";
import PrimaryButton from "../buttons/PrimaryButton";
import { useRouter } from "next/router";
import LightPrimaryButton from "../buttons/LightPrimaryButton";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PhoneIcon from "@mui/icons-material/Phone";
import HomeIcon from "@mui/icons-material/Home";
import PlaceIcon from "@mui/icons-material/Place";

const Footer = () => {
  const path = useRouter().pathname;

  return (
    <>
      <div className="bg-primary-900  flex flex-col px-8 items-center justify-between py-8 lg:px-20 lg:flex-row">
        <Link href="/" className="grow-0 lg:w-52">
          <Logo />
        </Link>
        <div className="flex flex-col pt-8 items-center gap-10">
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
          <ul className="flex flex-col justify-evenly leading-9 lg:gap-9 lg:flex-row">
            <li className="text-gray-400 flex">
              <span className="flex items-center">
                <PhoneIcon fontSize="small" className="text-gray-400" />
              </span>
              &nbsp;
              <p> 46807041</p>
            </li>
            <li className="text-gray-400 flex">
              <span className="flex items-center">
                <AlternateEmailIcon
                  fontSize="small"
                  className="text-gray-400"
                />
              </span>
              &nbsp;
              <p> sng@sng.no</p>
            </li>
            <li className="text-gray-400 flex">
              <span className="flex items-center">
                <PlaceIcon fontSize="small" className="text-gray-400" />
              </span>
              &nbsp;
              <p> 25 Kongens gate, 0485 Oslo</p>
            </li>
          </ul>
        </div>
        <div className="flex justify-end mt-8 lg:w-52">
          <Link href="/kontakt" className="w-52 hidden lg:block">
            <LightPrimaryButton>Kontakt oss</LightPrimaryButton>
          </Link>
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
