import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Select, { type SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useTranslation } from "react-i18next";

interface AppProps {
  toggleTheme: () => void;
  isDark: boolean;
}

type Language = "es" | "en" | "fr";

const LANGUAGE_TO_FLAG: Record<Language, string> = {
  es: "🇪🇸",
  en: "🇬🇧",
  fr: "🇫🇷",
};

export default function ButtonAppBar({ toggleTheme, isDark }: AppProps) {
  const { i18n, t } = useTranslation();

  const handleLanguageChange = (event: SelectChangeEvent) => {
    i18n.changeLanguage(event.target.value as Language);
  };

  const currentLanguage = i18n.language.split("-")[0] as Language;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: "primary.dark" }}
        enableColorOnDark
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
            <img
              src={isDark ? "./logo_white.svg" : "./logo_black.svg"}
              width="25"
              height="25"
              alt="Jean Edouard's Web Logo"
            />
            <Typography sx={{ fontWeight: 700 }}>
              Jean Edouard Roy Caro
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Select
              value={currentLanguage}
              onChange={handleLanguageChange}
              size="small"
              variant="outlined"
              inputProps={{
                "aria-label": t("languageSelector"),
              }}
              renderValue={(value) => (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: "1.2rem",
                  }}
                >
                  {LANGUAGE_TO_FLAG[value as Language]}
                </Box>
              )}
              sx={{
                minWidth: 60,
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "inherit",
                },
              }}
            >
              <MenuItem value="es">
                <Box component="span">🇪🇸</Box>
                <Box sx={{ ml: 1 }}>Español</Box>
              </MenuItem>

              <MenuItem value="en">
                <Box component="span">🇬🇧</Box>
                <Box sx={{ ml: 1 }}>English</Box>
              </MenuItem>

              <MenuItem value="fr">
                <Box component="span">🇫🇷</Box>
                <Box sx={{ ml: 1 }}>Français</Box>
              </MenuItem>
            </Select>
            <Button
              color="inherit"
              onClick={toggleTheme}
              aria-label={isDark ? "Light Mode" : "Dark Mode"}
              sx={{
                minWidth: 40,
                "&:hover svg": {
                  transform: "rotate(20deg) scale(1.2)",
                },
              }}
            >
              {!isDark ? <LightModeIcon /> : <DarkModeIcon />}
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
