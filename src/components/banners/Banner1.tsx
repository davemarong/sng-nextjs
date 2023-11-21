import { Button } from "@mui/material";
import React from "react";
import PrimaryButton from "../buttons/PrimaryButton";
import Link from "next/link";
import LightPrimaryButton from "../buttons/LightPrimaryButton";

const Banner = () => {
  return (
    <div className="bg-gray-800 py-24 w-full flex justify-center items-center flex-col">
      <h2 className="text-center mb-10 max-w-screen-lg text-5xl text-white">
        Vi er en forretningsorganisasjon basert i New York, og vi er glade for å
        betjene deg. Besøk oss.
      </h2>
      <Link href="/om-oss">
        <LightPrimaryButton>Om oss</LightPrimaryButton>
      </Link>
    </div>
  );
};

export default Banner;
