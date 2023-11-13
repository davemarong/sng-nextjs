"use client";
import Typography from "@mui/material/Typography";
import React from "react";
const OmOss = () => {
  const func = async () => {
    const response = await fetch("http://localhost:1337/api/products");
    const result = await response.json();
    console.log(result);
  };
  func();
  console.log("havel");
  return (
    <div>
      <Typography variant="h2">Scandinavian Nasar Group</Typography>
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Typography>
    </div>
  );
};
export default OmOss;
