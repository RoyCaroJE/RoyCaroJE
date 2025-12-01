import { createTheme } from "@mui/material/styles";

// Light theme
export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#F5E7C6",
      contrastText: "#161616",
      dark: "#DDBA7D",
      light: "#FAF3E1",
    },
    secondary: {
      main: "#FF6D1F",
      dark: "#CF4B00",
      contrastText: "#DC0000",
    },
    background: {
      default: "#FAF3E1",
      paper: "#F5E7C6",
    },
  },
});

// Dark theme
export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#393E46",
      contrastText: "#DFD0B8",
      dark: "#222831",
      light: "#948979",
    },
    secondary: {
      main: "#948979",
    },
    background: {
      default: "#393E46",
      paper: "#222831",
    },
  },
});
