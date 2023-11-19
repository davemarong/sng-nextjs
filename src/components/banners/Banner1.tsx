import { Button } from "@mui/material";
import React from "react";
import PrimaryButton from "../buttons/PrimaryButton";

const Banner = () => {
  return (
    <div className="bg-gray-700 h-500 w-full flex justify-center items-center flex-col">
      <h2 className="text-center max-w-screen-lg text-5xl text-white">
        Vi er en forretningsorganisasjon basert i New York, og vi er glade for å
        betjene deg. Besøk oss.
      </h2>
      <PrimaryButton>Om oss</PrimaryButton>
    </div>
  );
};

export default Banner;
