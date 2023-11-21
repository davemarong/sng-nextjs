import { Button } from "@mui/material";
import React from "react";
import PrimaryButton from "../buttons/PrimaryButton";

const Banner2 = () => (
  <div className="font-sans bg-white py-24 mx-8 text-center flex flex-col justify-center items-center">
    <h3 className="text-2xl">Fra oss kan du nyte følgende</h3>
    <div className="flex flex-col gap-14 lg:gap-28 my-12 ml-7 lg:flex-row">
      <div className="flex-1">
        <h4 className="text-xl font-medium text-primary-600 text-left max-w-xs">
          Et flott arbeidsmiljø
        </h4>
        <p className="text-left text-gray-500 leading-8 pt-2 text-base max-w-xs">
          Vi vil ikke at du skal grue deg til mandager eller til å komme på jobb
          daglig. Derfor skaper vi et trygt og produktivt arbeidsmiljø der du
          kan oppnå ditt fulle potensiale.
        </p>
      </div>
      <div className="flex-1">
        <h4 className="text-xl font-medium text-primary-600 text-left max-w-xs">
          Konkurransedyktige lønninger
        </h4>
        <p className="text-left text-gray-500 leading-8 pt-2 max-w-xs">
          Her hos SNG betaler vi deg det du fortjener eller enda mer. Så lenge
          du hjelper oss med å nå våre mål, vil vi fortsette å forandre verden
          sammen.
        </p>
      </div>
      <div className="flex-1">
        <h4 className="text-xl font-medium text-primary-600 text-left max-w-xs">
          Fordeler for ansatte
        </h4>
        <p className="text-left text-gray-500 leading-8 pt-2 text-base max-w-xs">
          Vi tilbyr også fordeler som overtidskompensasjon, betalt fri, og
          minstelønn.
        </p>
      </div>
    </div>
  </div>
);

export default Banner2;
