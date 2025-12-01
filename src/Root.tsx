import React, { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { lightTheme, darkTheme } from "./theme";
import Home from "./Home";

const Root: React.FC = () => {
  const [isDark, setIsDark] = useState(false);
  const toggleTheme = () => setIsDark(!isDark);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <CssBaseline />
      <Home toggleTheme={toggleTheme} isDark={isDark} />
    </ThemeProvider>
  );
};

export default Root;
