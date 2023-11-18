import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#273444", // Use the darkest gray as the primary color
    },
    secondary: {
      main: "#8492a6", // Use the dark gray as the secondary color
    },
    background: {
      default: "#f8fafc", // Use the lightest gray as the default background color
    },
    text: {
      secondary: "#fff",
    },
  },
});

export default theme;
