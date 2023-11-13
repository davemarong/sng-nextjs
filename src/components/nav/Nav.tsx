import React, { useEffect, useState } from "react";
import { navItemsPublic } from "./NavItems";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "next/link";

const Nav = () => {
  return (
    <Grid
      className="px-16"
      container
      justifyContent="space-between"
      wrap="nowrap"
      alignItems="center"
    >
      <Grid item justifyContent="center" alignItems="center" xs={4}>
        <Typography variant="h6">SNG - Scandinavian Nasar Group</Typography>
      </Grid>
      <Grid item justifyContent="end">
        {navItemsPublic.map((item) => {
          return (
            <Link key={item.path} href={item.path}>
              <Button
                variant="outlined"
                style={{ backgroundColor: item.color, margin: "20px 10px" }}
                key={item.label}
              >
                {item.label}
              </Button>
            </Link>
          );
        })}
        {/* <Button variant="outlined" onClick={handleNetlifyLogin}>
          Logg Inn
        </Button>
        <Button variant="contained" onClick={handleNetlifyRegister}>
          Registrer
        </Button> */}
      </Grid>
    </Grid>
  );
};
export default Nav;
