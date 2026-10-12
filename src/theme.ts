import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#173D35",
      light: "#315D52",
      dark: "#102C26",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#16836D",
      light: "#28A58A",
      dark: "#126B59",
      contrastText: "#FFFFFF",
    },
    background: {
      default: "#F5F7F2",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#17231F",
      secondary: "#596660",
    },
    divider: "#DFE6E0",
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
  shape: { borderRadius: 16 },
  typography: {
    fontFamily: '"Inter", "Aptos", "Segoe UI", sans-serif',
    h1: { fontWeight: 800, letterSpacing: "-0.055em" },
    h2: { fontWeight: 800, letterSpacing: "-0.045em" },
    h4: { fontWeight: 750, letterSpacing: "-0.035em" },
    button: { fontWeight: 650, textTransform: "none" },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 999, paddingInline: 18 },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: { backgroundImage: "none" },
      },
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#DCEBE4",
      contrastText: "#10201B",
      dark: "#BFD6CB",
      light: "#F2F8F4",
    },
    secondary: {
      main: "#83D7B8",
      light: "#A0E7CD",
      dark: "#61B998",
      contrastText: "#10201B",
    },
    background: {
      default: "#101714",
      paper: "#19221E",
    },
    text: {
      primary: "#EDF4EF",
      secondary: "#A6B5AC",
    },
    divider: "#303C35",
  },
  shape: { borderRadius: 16 },
  typography: {
    fontFamily: '"Inter", "Aptos", "Segoe UI", sans-serif',
    h1: { fontWeight: 800, letterSpacing: "-0.055em" },
    h2: { fontWeight: 800, letterSpacing: "-0.045em" },
    h4: { fontWeight: 750, letterSpacing: "-0.035em" },
    button: { fontWeight: 650, textTransform: "none" },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 999, paddingInline: 18 },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: { backgroundImage: "none" },
      },
    },
    text: {
      primary: "#DFD0B8",
      secondary: "#B7ABA0",
    },
    divider: "#5A5A5A",
  },
});
