import React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Collapse from "@mui/material/Collapse";

const CustomTreeView = () => {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <div>
          <FormControlLabel control={<Checkbox />} label="Pasta" />
        </div>
      </Collapse>
    </div>
  );
};

export default CustomTreeView;
