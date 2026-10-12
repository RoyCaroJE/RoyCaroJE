import React, { useLayoutEffect, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { lightTheme, darkTheme } from "./theme";
import Home from "./Home";
import AppLayout from "./AppLayout";
import i18n from "./i18n";

const Root: React.FC = () => {
  const [isDark, setIsDark] = useState(false);
  const toggleTheme = () => setIsDark((prev) => !prev);

  useLayoutEffect(() => {
    const syncDocumentLanguage = (language: string) => {
      document.documentElement.lang = language.split("-")[0];
    };

    syncDocumentLanguage(i18n.resolvedLanguage ?? i18n.language);
    i18n.on("languageChanged", syncDocumentLanguage);

    return () => {
      i18n.off("languageChanged", syncDocumentLanguage);
    };
  }, []);

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
