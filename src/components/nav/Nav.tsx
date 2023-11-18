import React from "react";
import { navItemsPublic } from "./NavItems";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Link from "next/link";
import Image from "next/image";
import Logo from "../logo/Logo";
const Nav = () => {
  return (
    <Grid
      className="px-16 bg-darkest-gray"
      container
      justifyContent="space-evenly"
      wrap="nowrap"
      alignItems="center"
    >
      <Grid
        item
        container
        justifyContent="end"
        alignItems="center"
        xs={2}
        className="mb-5"
      >
        <Logo />
      </Grid>
      <Grid container item justifyContent="center" xs={8}>
        {navItemsPublic.map((item) => {
          return (
            <Link key={item.path} href={item.path}>
              <Button className="text-white px-4" key={item.label}>
                {item.label}
              </Button>
            </Link>
          );
        })}
      </Grid>
      <Grid item xs={2}>
        <Button variant="outlined" className="bg-lightest-gray">
          Kontakt Oss
        </Button>
      </Grid>
    </Grid>
  );
};
export default Nav;