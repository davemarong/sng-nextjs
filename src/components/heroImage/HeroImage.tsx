import { Button } from "@mui/material";
import React from "react";

const HeroImage = () => {
  return (
    <div className="bg-hero bg-cover h-800 w-full flex justify-center items-center flex-col">
      <h1 className="text-white text-6xl text-center my-10">
        Sammen blir vi sterke!
      </h1>
      <Button
        variant="outlined"
        className="bg-gray-100 text-black hover:bg-gray-700 hover:text-white border-0 hover:border-0 w-52 h-12 m-4"
      >
        Kontakt Oss
      </Button>
    </div>
  );
};

export default HeroImage;
