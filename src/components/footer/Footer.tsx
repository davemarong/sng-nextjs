import { Button, Grid } from "@mui/material";
import Link from "next/link";
import React from "react";
import { navItemsPublic } from "../nav/NavItems";
import Logo from "../logo/Logo";
import CircleIcon from "@mui/icons-material/Circle";
import PrimaryButton from "../buttons/PrimaryButton";

const Footer = () => {
  return (
    <>
      <div className="bg-gray-900 flex items-center justify-between py-12 px-20">
        <div className="flex-1">
          <Logo />
        </div>
        <div className="flex items-center gap-48 flex-5">
          <div className="flex flex-col justify-center">
            {navItemsPublic.map((item) => {
              return (
                <Link key={item.path} href={item.path}>
                  <Button className="text-white px-4" key={item.label}>
                    {item.label}
                  </Button>
                </Link>
              );
            })}
          </div>
          <div className="text-white leading-9">
            <p>46807041</p>
            <p>25 Kongens gate, 0485 Oslo</p>
            <p>sng@sng.com</p>
          </div>
        </div>
        <div className="flex-1 flex justify-end">
          <PrimaryButton>Kontakt oss</PrimaryButton>
        </div>
      </div>
      <div className="bg-black h-100 flex justify-between items-center px-10">
        <p className="text-gray-500 ">Copyright SNG 2023</p>
        <p className="text-gray-500">Marong utvikling</p>
        <div>
          <CircleIcon className="text-white" />
          <CircleIcon className="text-white" />
          <CircleIcon className="text-white" />
        </div>
      </div>
    </>
  );
};

export default Footer;
