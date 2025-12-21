import React, { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { lightTheme, darkTheme } from "./theme";
import Home from "./Home";
import AppLayout from "./AppLayout";

const Root: React.FC = () => {
  const [isDark, setIsDark] = useState(false);
  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <CssBaseline />
      <AppLayout toggleTheme={toggleTheme} isDark={isDark}>
        <Home />
      </AppLayout>
    </ThemeProvider>
  );
};

export default Root;
