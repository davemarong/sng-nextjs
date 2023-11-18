import React, { ReactNode } from "react";
import Nav from "../nav/Nav";
import Container from "@mui/material/Container";
import Footer from "../footer/Footer";

interface GlobalLayoutProps {
  children: ReactNode;
}
const GlobalLayout = ({ children }: GlobalLayoutProps) => {
  return (
    <>
      <Nav />
      {/* <Container maxWidth="xl"> */}
      {children}
      <Footer />
      {/* </Container> */}
    </>
  );
};

export default GlobalLayout;
