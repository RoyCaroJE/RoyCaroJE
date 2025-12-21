import { Box, Toolbar, Typography } from "@mui/material";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        position: "sticky",
        bottom: 0,
        width: "100%",
        bgcolor: "red",
      }}
    >
      <Toolbar>
        <Typography variant="body1">News</Typography>
      </Toolbar>
    </Box>
  );
}

export default Footer;
