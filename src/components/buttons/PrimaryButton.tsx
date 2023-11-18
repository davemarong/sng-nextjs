import { Button, Grid } from "@mui/material";
import React, { Children, ReactElement, ReactNode } from "react";

interface PrimaryButtonProps {
  children: ReactNode;
}
const PrimaryButton = ({ children }: PrimaryButtonProps) => {
  return (
    <Button
      variant="outlined"
      className="bg-lightest-gray text-black hover:bg-darkest-gray hover:text-white border-0 hover:border-0 w-52 h-12 m-4"
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
