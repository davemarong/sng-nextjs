"use client";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import React from "react";
const OmOss = () => {
  return (
    <div>
      <div className="bg-hero1 bg-black bg-cover h-600 w-full flex justify-center items-center flex-col">
        <h1 className="text-white text-6xl  text-center">
          Fordi SNG mener du er verdt det
        </h1>
      </div>
      <div className="mx-40">
        <h2 className="text-center mt-28 mb-16">Scandinavian Nasar Group</h2>
        <div className="flex justify-center">
          <p className="max-w-2xl text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="flex my-28 gap-28">
          <Image src="/omoss1.jpg" height={600} width={600} alt="" />
          <div>
            <h2 className="text-center mt-28 mb-16">Hva gjør vi?</h2>
            <div className="flex justify-center">
              <p className="max-w-xl text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
        <div className="flex my-28 gap-28">
          <div>
            <h2 className="text-center mt-28 mb-16">Vår historie</h2>
            <div className="flex justify-center">
              <p className="max-w-xl text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
          <Image src="/omoss2.jpg" height={600} width={600} alt="" />
        </div>
      </div>
    </div>
  );
};
export default OmOss;