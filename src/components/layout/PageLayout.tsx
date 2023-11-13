import Container from "@mui/material/Container";
import React from "react";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Container maxWidth="sm">{children}</Container>;
}
