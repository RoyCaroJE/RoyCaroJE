import MuiAppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import TranslateIcon from "@mui/icons-material/Translate";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CheckIcon from "@mui/icons-material/Check";
import { useState } from "react";
import { useTranslation } from "react-i18next";

interface AppProps {
  toggleTheme: () => void;
  isDark: boolean;
}

type Language = "es" | "en" | "fr";

const LANGUAGES: { code: Language; flag: string; label: string }[] = [
  { code: "es", flag: "🇪🇸", label: "Español" },
  { code: "en", flag: "🇬🇧", label: "English" },
  { code: "fr", flag: "🇫🇷", label: "Français" },
];

export default function ButtonAppBar({ toggleTheme, isDark }: AppProps) {
  const { i18n, t } = useTranslation();
  const [languageMenuAnchor, setLanguageMenuAnchor] =
    useState<HTMLElement | null>(null);

  const currentLanguage = i18n.language.split("-")[0] as Language;
  const activeLanguage =
    LANGUAGES.find(({ code }) => code === currentLanguage) ?? LANGUAGES[1];
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
          <Button
            color="inherit"
            size="small"
            variant="outlined"
            onClick={(event) => setLanguageMenuAnchor(event.currentTarget)}
            aria-label={t("languageSelector")}
            aria-haspopup="menu"
            aria-expanded={Boolean(languageMenuAnchor)}
            aria-controls={languageMenuAnchor ? "language-menu" : undefined}
            sx={{
              minWidth: { xs: 44, sm: 78 },
              px: { xs: 0.5, sm: 1 },
              py: 0.75,
              borderColor: "divider",
              borderRadius: 999,
              color: "text.secondary",
              fontSize: { xs: ".65rem", sm: ".78rem" },
              "&:hover": {
                borderColor: "secondary.main",
                bgcolor: "action.hover",
              },
            }}
          >
            <TranslateIcon sx={{ fontSize: { xs: 15, sm: 17 }, mr: 0.5 }} />
            {activeLanguage.code.toUpperCase()}
            <KeyboardArrowDownIcon
              sx={{
                display: { xs: "none", sm: "block" },
                fontSize: 18,
                ml: 0.25,
              }}
            />
          </Button>
          <Menu
            id="language-menu"
            anchorEl={languageMenuAnchor}
            open={Boolean(languageMenuAnchor)}
            onClose={() => setLanguageMenuAnchor(null)}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            slotProps={{
              paper: {
                sx: {
                  mt: 1,
                  minWidth: 176,
                  border: "1px solid",
                  borderColor: "divider",
                  borderRadius: 2.5,
                  boxShadow: (theme) =>
                    theme.palette.mode === "dark"
                      ? "0 16px 40px rgba(0,0,0,.35)"
                      : "0 16px 40px rgba(29,61,48,.14)",
                },
              },
            }}
          >
            {LANGUAGES.map(({ code, flag, label }) => (
              <MenuItem
                key={code}
                selected={currentLanguage === code}
                onClick={() => {
                  void i18n.changeLanguage(code);
                  setLanguageMenuAnchor(null);
                }}
                sx={{ gap: 1.25, py: 1.1 }}
              >
                <Box
                  component="span"
                  aria-hidden="true"
                  sx={{ fontSize: "1.1rem", lineHeight: 1 }}
                >
                  {flag}
                </Box>
                <Typography
                  component="span"
                  variant="body2"
                  sx={{ flex: 1, fontWeight: 550 }}
                >
                  {label}
                </Typography>
                {currentLanguage === code && (
                  <CheckIcon fontSize="small" color="secondary" />
                )}
              </MenuItem>
            ))}
          </Menu>
          <Button
            color="inherit"
            onClick={toggleTheme}
            aria-label={isDark ? "Light Mode" : "Dark Mode"}
            sx={{
              minWidth: { xs: 36, sm: 40 },
              width: { xs: 36, sm: 40 },
              height: { xs: 36, sm: 40 },
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
