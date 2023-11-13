import React, { ReactNode } from "react";
import Nav from "../nav/Nav";
import Container from "@mui/material/Container";

interface GlobalLayoutProps {
  children: ReactNode;
}
const GlobalLayout = ({ children }: GlobalLayoutProps) => {
  return (
    <>
      <Nav />
      <Container maxWidth="xl">{children}</Container>
    </>
  );
};

export default GlobalLayout;
