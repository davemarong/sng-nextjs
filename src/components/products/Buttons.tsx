import React from "react";
import { Button, Typography } from "@mui/material";

interface ButtonsProps {
  setPage: (value: number) => void;
  page: number;
}
const Buttons = ({ setPage, page }: ButtonsProps) => {
  return (
    <div className="flex">
      <Typography>Page {page}</Typography>
      <Button
        variant="outlined"
        onClick={() => {
          setPage(page - 1);
        }}
      >
        Back page {"<"}-
      </Button>
      <Button
        variant="outlined"
        onClick={() => {
          setPage(page + 1);
        }}
      >
        Next page -{">"}
      </Button>
    </div>
  );
};

export default Buttons;
