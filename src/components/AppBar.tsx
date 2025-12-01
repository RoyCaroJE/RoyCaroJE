import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import ComputerIcon from "@mui/icons-material/Computer";

interface AppProps {
  toggleTheme: () => void;
  isDark: boolean;
}

export default function ButtonAppBar({ toggleTheme, isDark }: AppProps) {
  return (
    <Box sx={{ flexGrow: 1, backgroundColor: "background.default" }}>
      <AppBar position="static">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", gap: 2 }}>
            <ComputerIcon />
            <Typography sx={{ fontWeight: 700 }}>
              Jean Edouard Roy Caro
            </Typography>
          </Box>
          <Button color="inherit" onClick={() => toggleTheme()}>
            {!isDark ? <LightModeIcon /> : <DarkModeIcon />}
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
