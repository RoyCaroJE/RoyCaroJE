import { Button, Grid, Typography, Box, Container } from "@mui/material";
import SocialMedia from "./SocialMedia";
import MailIcon from "@mui/icons-material/Mail";
import DownloadIcon from "@mui/icons-material/Download";
import { useTranslation } from "react-i18next";

function Footer() {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/cv-jean-edouard-roy-caro.pdf";
    link.download = "Jean-Edouard-Roy-Caro-CV.pdf";
    link.click();
  };

  const { t } = useTranslation();

  return (
    <Box
      component="footer"
      sx={{
        borderTop: "1px solid",
        borderColor: "divider",
        bgcolor: "background.paper",
        py: { xs: 3, md: 4 },
      }}
    >
      <Container maxWidth="lg">
        <Grid container alignItems="center" spacing={{ xs: 2, md: 3 }}>
          <Grid
            size={{ xs: 12, md: 4 }}
            display="flex"
            justifyContent={{ xs: "center", md: "flex-start" }}
          >
            <SocialMedia />
          </Grid>
          <Grid
            size={{ xs: 12, md: 4 }}
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap={1}
            sx={{
              color: "text.secondary",
              textDecoration: "none",
              cursor: "pointer",
              transition: "color 160ms ease",
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
          <Grid
            size={{ xs: 12, md: 4 }}
            display="flex"
            justifyContent={{ xs: "center", md: "flex-end" }}
          >
            <Button
              variant="contained"
              startIcon={<DownloadIcon />}
              onClick={handleDownloadCV}
              sx={{
                borderRadius: 999,
                boxShadow: "none",
                "&:hover": { boxShadow: "none" },
              }}
            >
              {t("download")}
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
