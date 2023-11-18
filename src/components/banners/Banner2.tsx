import { Button } from "@mui/material";
import React from "react";

const Banner2 = () => (
  <div className="bg-lightest-white h-500 text-center flex flex-col justify-center items-center">
    <h3 className="text-3xl">From us, you can enjoy the following</h3>
    <div className="flex gap-28 my-12 ml-7">
      <div className="flex-1">
        <h4 className="text-xl font-medium text-left max-w-xs">
          A great working environment
        </h4>
        <p className="text-left lighter leading-8 pt-2 text-base max-w-xs">
          We dont want you to dread Mondays or coming to work daily.Thats why we
          create a safe and productive work environment where you can achieve
          your full potential.
        </p>
      </div>
      <div className="flex-1">
        <h4 className="text-xl font-medium text-left max-w-xs">
          Competitive salaries
        </h4>
        <p className="text-left lighter leading-8 pt-2 max-w-xs">
          Here at SNG, we pay you what you deserve or even more. As long as you
          help us achieve our goals, well keep changing the world together.
        </p>
      </div>
      <div className="flex-1">
        <h4 className="text-xl font-medium text-left max-w-xs">
          Employee benefits
        </h4>
        <p className="text-left lighter leading-8 pt-2 text-base max-w-xs">
          We also provide benefits such as overtime compensation, paid time off,
          and minimum wage.
        </p>
      </div>
    </div>
    <Button className="bg-gray text-black hover:bg-darkest-gray hover:text-white border-0 hover:border-0 w-52 h-12 m-4">
      Våre tilbud
    </Button>
  </div>
);

export default Banner2;
