import { Box, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import TechStack from "./techstack/TechStack";
import { useTranslation } from "react-i18next";

const ME_IMAGE_WEBP_SRCSET =
  "/optimized/me-342.webp 342w, /optimized/me-684.webp 684w";
const ME_IMAGE_FALLBACK = "/me.jpg";

function Presentation() {
  const { t } = useTranslation();
  return (
    <Grid
      component="section"
      id="intro"
      aria-labelledby="intro-heading"
      container
      className="motion-in"
      sx={{
        alignItems: "center",
        overflow: "hidden",
        position: "relative",
        isolation: "isolate",
        borderRadius: { xs: 4, md: 6 },
        border: "1px solid",
        borderColor: "divider",
        bgcolor: "background.paper",
        p: { xs: 2.5, sm: 4, md: 6 },
        boxShadow: (theme) =>
          theme.palette.mode === "dark"
            ? "0 28px 80px rgba(0,0,0,.22)"
            : "0 28px 80px rgba(29,61,48,.08)",
        "&::before": {
          content: '""',
          position: "absolute",
          width: 420,
          height: 420,
          right: { xs: -210, md: 30 },
          top: -250,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(22,131,109,.16), transparent 70%)",
          zIndex: -1,
          pointerEvents: "none",
        },
      }}
    >
      <Grid size={{ xs: 12, md: 7 }}>
        <Stack spacing={{ xs: 2, md: 2.5 }} sx={{ pr: { md: 3 } }}>
          <Typography
            component="p"
            variant="overline"
            sx={{
              color: "secondary.main",
              fontWeight: 800,
              letterSpacing: ".18em",
            }}
          >
            {t("subtitle1")}
          </Typography>
          <Typography
            id="intro-heading"
            component="h1"
            variant="h1"
            sx={{
              fontSize: "clamp(2.65rem, 6vw, 5rem)",
              lineHeight: 1.02,
              maxWidth: "11ch",
            }}
          >
            {t("title")}
          </Typography>
          <Typography
            component="p"
            sx={{
              color: "text.secondary",
              fontWeight: 600,
              fontSize: { xs: "1.15rem", md: "1.35rem" },
              m: 0,
            }}
          >
            {t("subtitle2")}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              lineHeight: 1.8,
              maxWidth: "62ch",
              color: "text.secondary",
              fontSize: { xs: "1rem", md: "1.05rem" },
            }}
          >
            {t("presentation_text")}
          </Typography>
          <TechStack />
        </Stack>
      </Grid>
      <Grid
        size={{ xs: 12, md: 5 }}
        sx={{
          display: "flex",
          justifyContent: { xs: "center", md: "flex-end" },
          mt: { xs: 3, md: 0 },
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: { xs: "min(100%, 330px)", md: "min(100%, 370px)" },
            p: 1.5,
            borderRadius: 5,
            bgcolor: "background.default",
            border: "1px solid",
            borderColor: "divider",
            transform: { md: "rotate(2deg)" },
            transition: "transform 250ms ease",
            "&:hover": { transform: { md: "rotate(0deg) translateY(-4px)" } },
          }}
        >
          <picture>
            <source
              type="image/webp"
              srcSet={ME_IMAGE_WEBP_SRCSET}
              sizes="(max-width: 900px) 280px, 342px"
            />
            <img
              src={ME_IMAGE_FALLBACK}
              alt="Jean Edouard Roy Caro"
              width={370}
              height={430}
              style={{
                width: "100%",
                height: "auto",
                aspectRatio: "0.86",
                borderRadius: 24,
                objectFit: "cover",
              }}
              fetchPriority="high"
              loading="eager"
              decoding="sync"
            />
          </picture>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Presentation;
