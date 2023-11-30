import { Button } from "@mui/material";
import React from "react";
import PrimaryButton from "../buttons/PrimaryButton";
import Link from "next/link";
import LightPrimaryButton from "../buttons/LightPrimaryButton";

const Banner = () => {
  return (
    <div className="bg-primary-800 py-24 w-full flex justify-center items-center flex-col">
      <h2 className="font-poppins text-center mb-10 mx-8 text-2xl max-w-screen-lg lg:text-4xl text-white">
        Vi er en skandinavisk bedrift, og vi er glade for å betjene deg. Besøk
        oss.
      </h2>
      <Link href="/om-oss">
        <LightPrimaryButton>Om oss</LightPrimaryButton>
      </Link>
    </div>
  );
};

export default Banner;
