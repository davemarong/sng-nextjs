import React from "react";
import Container from "@mui/material/Container";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Container maxWidth="md">{children}</Container>;
}
