import { Box } from "@mui/material";
import AppBar from "./components/AppBar";
import Footer from "./components/Footer";

interface AppLayoutProps {
  toggleTheme: () => void;
  isDark: boolean;
  children: React.ReactNode;
}

function AppLayout({ toggleTheme, isDark, children }: AppLayoutProps) {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header */}
      <AppBar toggleTheme={toggleTheme} isDark={isDark} />
      {/* Main content */}
      <Box
        component="main"
        sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}
      >
        {children}
      </Box>
      {/* Footer */}
      <Box sx={{ mt: "auto" }}>
        <Footer />
      </Box>
    </Box>
  );
}

export default AppLayout;
