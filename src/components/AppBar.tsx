import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

interface AppProps {
  toggleTheme: () => void;
  isDark: boolean;
}

export default function ButtonAppBar({ toggleTheme, isDark }: AppProps) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: "primary.dark" }}
        enableColorOnDark
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", gap: 2 }}>
            {!isDark ? (
              <img src="./logo_black.svg" width="25" />
            ) : (
              <img src="./logo_white.svg" width="25" />
            )}
            <Typography sx={{ fontWeight: 700 }}>
              Jean Edouard Roy Caro
            </Typography>
          </Box>
          <Button
            color="inherit"
            onClick={toggleTheme}
            sx={{
              minWidth: 40,
              transition: "transform 0.3s ease",
              "&:hover svg": {
                transform: "rotate(20deg) scale(1.2)",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                transition: "transform 0.3s ease",
              }}
            >
              {!isDark ? <LightModeIcon /> : <DarkModeIcon />}
            </Box>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
