import { Button, Grid } from "@mui/material";
import React, { Children, ReactElement, ReactNode } from "react";

interface PrimaryButtonProps {
  children: ReactNode;
}
const PrimaryButton = ({ children }: PrimaryButtonProps) => {
  return (
    <button className="transition-colors duration-200 rounded bg-gray-100 text-black hover:bg-gray-900 hover:text-white border-0 hover:border-0 w-52 h-12 ">
      {children}
    </button>
  );
};

export default PrimaryButton;
