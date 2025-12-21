import { Button, Grid, Typography, Box } from "@mui/material";
import SocialMedia from "./SocialMedia";
import MailIcon from "@mui/icons-material/Mail";
import DownloadIcon from "@mui/icons-material/Download";

function Footer() {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/cv-jean-edouard-roy-caro.pdf";
    link.download = "Jean-Edouard-Roy-Caro-CV.pdf";
    link.click();
  };

  return (
    <Box
      component="footer"
      sx={{
        borderTop: "1px solid",
        borderColor: "divider",
        bgcolor: "background.paper",
        py: 2,
        px: 2,
      }}
    >
      <Grid container alignItems="center">
        <Grid size={4} display="flex" justifyContent="flex-start">
          <SocialMedia />
        </Grid>
        <Grid
          size={4}
          display="flex"
          justifyContent="center"
          alignItems="center"
          gap={1}
          sx={{
            color: "primary.contrastText",
            cursor: "pointer",
            "&:hover": {
              color: "secondary.main",
            },
          }}
          component="a"
          href="mailto:roycaroje@gmail.com"
        >
          <MailIcon fontSize="small" />
          <Typography variant="body2">roycaroje@gmail.com</Typography>
        </Grid>
        <Grid size={4} display="flex" justifyContent="flex-end">
          <Button
            variant="contained"
            startIcon={<DownloadIcon />}
            onClick={handleDownloadCV}
            sx={{
              textTransform: "none",
              borderRadius: 2,
              boxShadow: "none",
              "&:hover": {
                boxShadow: 2,
              },
            }}
          >
            Download CV
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;
