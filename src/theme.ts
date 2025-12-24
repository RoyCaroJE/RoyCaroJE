import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: "light",

    primary: {
      main: "#B2C8B4",
      light: "#C4D6C1",
      dark: "#E0E4D7",
      contrastText: "#1E1E1E",
    },

    secondary: {
      main: "#1e56a3",
      light: "#347ada",
      dark: "#1e56a3",
      contrastText: "#ffffff",
    },

    background: {
      default: "#F0F4E1",
      paper: "#E0F4F1",
    },

    text: {
      primary: "#1E1E1E",
      secondary: "#57595B",
    },

    divider: "#d3c7b5",

    success: {
      main: "#1b7f5c",
      light: "#28be8a",
      dark: "#1b7f5c",
      contrastText: "#ffffff",
    },

    warning: {
      main: "#b8871f",
      light: "#dfae44",
      dark: "#866231",
      contrastText: "#000000",
    },

    error: {
      main: "#b13535",
      light: "#d06262",
      dark: "#7a2424",
      contrastText: "#ffffff",
    },

    info: {
      main: "#1e56a3",
      light: "#347ada",
      dark: "#1e56a3",
      contrastText: "#ffffff",
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
