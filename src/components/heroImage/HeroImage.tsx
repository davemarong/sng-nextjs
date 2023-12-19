import { Button } from "@mui/material";
import React from "react";
import PrimaryButton from "../buttons/PrimaryButton";
import Link from "next/link";

const HeroImage = () => {
  return (
    <div className="bg-nature bg-cover h-800 w-full">
      <div className="backdrop-brightness-50 h-full w-full flex justify-center items-center gap-20 flex-col">
        <h1 className="text-white text-4xl lg:text-5xl text-center mx-10">
          Sammen blir vi sterke!
        </h1>
        <h2 className="text-white text-2xl lg:text-3xl text-center mx-10 lg:max-w-4xl">
          SNG har som mål å samle og styrke konkurransefortrinnet til
          frittstående matgrossister for å oppnå deres fulle potensiale.
        </h2>
        {/* <Link href="/grossister">
        <PrimaryButton>Grossister</PrimaryButton>
      </Link> */}
      </div>
    </div>
  );
};

export default HeroImage;
