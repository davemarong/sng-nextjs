import { Button } from "@mui/material";
import React from "react";
import PrimaryButton from "../buttons/PrimaryButton";
import Link from "next/link";
import LightPrimaryButton from "../buttons/LightPrimaryButton";

const Banner = () => {
  return (
    <div className="bg-primary-800 py-24 w-full flex justify-center items-center flex-col">
      <h2 className="font-poppins text-center mb-10 mx-8 text-lg max-w-screen-lg lg:text-3xl text-white">
        SNG har som mål å samle og styrke konkurransefortrinnet til frittstående
        matgrossister for å oppnå deres fulle potensiale.Vår unikhet ligger i å
        berøre dem som ikke blir sett i markedet. Vi tror på våre grossister og
        ønsker å støtte dem for å nå sitt fulle potensiale.
      </h2>
      {/* <Link href="/om-oss">
        <LightPrimaryButton>Om oss</LightPrimaryButton>
      </Link> */}
    </div>
  );
};

export default Banner;
