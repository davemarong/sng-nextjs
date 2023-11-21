import { Button } from "@mui/material";
import React from "react";
import PrimaryButton from "../buttons/PrimaryButton";
import Link from "next/link";

const HeroImage = () => {
  return (
    <div className="bg-hero bg-cover h-800 w-full">
      <div className="backdrop-brightness-50 h-full w-full flex justify-center items-center flex-col">
        <h1 className="text-white text-6xl text-center my-10">
          Sammen blir vi sterke!
        </h1>
        {/* <Link href="/grossister">
        <PrimaryButton>Grossister</PrimaryButton>
      </Link> */}
      </div>
    </div>
  );
};

export default HeroImage;
