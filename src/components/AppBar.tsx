import MuiAppBar from "@mui/material/AppBar";
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
  const navigationLinks = [
    { href: "#intro", label: t("navigation.intro") },
    { href: "#projects", label: t("navigation.projects") },
    { href: "#experience", label: t("navigation.experience") },
  ];

  return (
    <MuiAppBar
      position="sticky"
      enableColorOnDark
      sx={{
        top: 0,
        zIndex: (theme) => theme.zIndex.appBar,
        color: "text.primary",
        bgcolor: isDark ? "rgba(16, 23, 20, 0.88)" : "rgba(249, 250, 247, 0.9)",
        boxShadow: "none",
        borderBottom: "1px solid",
        borderColor: "divider",
        backdropFilter: "blur(18px)",
      }}
    >
      <Toolbar
        sx={{
          width: "100%",
          maxWidth: 1200,
          mx: "auto",
          minHeight: { xs: 62, md: 72 },
          px: { xs: 1.25, sm: 3 },
          display: "grid",
          gridTemplateColumns: "minmax(0, 1fr) auto minmax(0, 1fr)",
          alignItems: "center",
        }}
      >
        <Box
          component="a"
          href="#intro"
          aria-label="Jean Edouard Roy Caro — home"
          sx={{
            display: "flex",
            gap: { xs: 0, sm: 1.25 },
            alignItems: "center",
            color: "inherit",
            textDecoration: "none",
            minWidth: 0,
          }}
        >
          <img
            src={isDark ? "/logo_white.svg" : "/logo_black.svg"}
            width="30"
            height="30"
            alt=""
          />
          <Typography
            sx={{
              display: { xs: "none", md: "block" },
              fontWeight: 750,
              fontSize: { xs: ".88rem", sm: "1rem" },
              whiteSpace: "nowrap",
            }}
          >
            Jean Edouard Roy Caro
          </Typography>
        </Box>
        <Box
          component="nav"
          aria-label={t("navigation.label")}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flex: "none",
            minWidth: 0,
            gap: { xs: 0, sm: 0.5 },
            overflowX: "auto",
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          {navigationLinks.map(({ href, label }) => (
            <Button
              key={href}
              component="a"
              href={href}
              color="inherit"
              size="small"
              sx={{
                flexShrink: 0,
                minWidth: 0,
                px: { xs: 0.6, sm: 1.5 },
                py: 0.65,
                color: "text.secondary",
                fontSize: { xs: ".68rem", sm: ".86rem" },
                whiteSpace: "nowrap",
                "&:hover": { color: "secondary.main", bgcolor: "action.hover" },
              }}
            >
              {label}
            </Button>
          ))}
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: { xs: 0.25, sm: 1 },
            flexShrink: 0,
            justifySelf: "end",
          }}
        >
          <Select
            value={currentLanguage}
            onChange={handleLanguageChange}
            size="small"
            variant="outlined"
            inputProps={{ "aria-label": t("languageSelector") }}
            renderValue={(value) => (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "1.1rem",
                }}
              >
                {LANGUAGE_TO_FLAG[value as Language]}
              </Box>
            )}
            sx={{
              minWidth: 52,
              "& .MuiSelect-select": { py: 0.75, px: 1 },
              "& .MuiOutlinedInput-notchedOutline": { borderColor: "divider" },
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
              width: 40,
              height: 40,
              px: 0,
              borderRadius: "50%",
              "&:hover svg": { transform: "rotate(20deg) scale(1.12)" },
              "& svg": { transition: "transform 180ms ease" },
            }}
          >
            {!isDark ? <LightModeIcon /> : <DarkModeIcon />}
          </Button>
        </Box>
      </Toolbar>
    </MuiAppBar>
  );
}
