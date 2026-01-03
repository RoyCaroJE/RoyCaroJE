import { Box, Stack, Typography, useTheme } from "@mui/material";
import Grid from "@mui/material/Grid";
import TechStack from "./techstack/TechStack";
import me from "../static/me.jpg";
import { useTranslation } from "react-i18next";

function Presentation() {
  const { t } = useTranslation();
  const theme = useTheme();
  return (
    <Grid
      container
      sx={{
        paddingTop: { xs: 2, md: 4 },
        paddingBottom: { xs: 2, md: 4 },
      }}
    >
      <Grid
        size={{ xs: 12, md: 4 }}
        display="flex"
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Stack direction="column">
          <img
            src={me}
            alt="Jean Edouard Roy Caro Picture"
            width={350}
            height={350}
            style={{
              width: 350,
              height: 350,
              borderRadius: "50%",
              boxShadow: "0px 4px 12px rgba(0,0,0,0.25)",
              border: `4px solid ${theme.palette.secondary.main}`,
              objectFit: "cover",
            }}
            fetchPriority="high"
            decoding="async"
          />
        </Stack>
      </Grid>
      <Grid size={{ xs: 12, md: 8 }} alignItems="center">
        <Box paddingLeft={{ xs: 0, md: 5 }}>
          <Typography
            variant="h2"
            fontWeight={800}
            sx={{
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              fontSize: {
                xs: "3.25rem",
                md: "3.75rem",
              },
            }}
          >
            {t("title")}
          </Typography>
          <Typography
            variant="h3"
            fontWeight={400}
            sx={{ mt: 1, color: "text.secondary" }}
          >
            {t("subtitle1") + " "}
            <Box
              component="span"
              sx={{
                color: "secondary.main",
                fontWeight: 600,
                display: "inline-block",
                animation: "vibes 4s ease-in-out infinite",
                "@keyframes vibes": {
                  "0%": { transform: "translateY(0)" },
                  "25%": { transform: "translateY(-4px)" },
                  "50%": { transform: "translateY(2px)" },
                  "75%": { transform: "translateY(-2px)" },
                  "100%": { transform: "translateY(0)" },
                },
                willChange: "transform",
              }}
            >
              {t("subtitle2")}
            </Box>
          </Typography>

          <Typography
            variant="body1"
            sx={{
              lineHeight: 1.6,
              textAlign: "justify",
              fontSize: "1.1rem",
              paddingTop: 2,
            }}
          >
            {t("presentation_text")}
          </Typography>
          <TechStack />
        </Box>
      </Grid>
    </Grid>
  );
}

export default Presentation;
