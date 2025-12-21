import { Box, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function SocialMedia() {
  const iconSize = 30;

  const socialLinks = [
    {
      icon: <GitHubIcon sx={{ fontSize: iconSize }} />,
      url: "https://github.com/caroyedu",
      label: "GitHub",
    },
    {
      icon: <LinkedInIcon sx={{ fontSize: iconSize }} />,
      url: "https://www.linkedin.com/in/jeanedouardroycaro",
      label: "LinkedIn",
    },
    {
      icon: <TwitterIcon sx={{ fontSize: iconSize }} />,
      url: "https://twitter.com/caroydev",
      label: "Twitter",
    },
  ];

  return (
    <Box>
      {socialLinks.map(({ icon, url, label }) => (
        <IconButton
          key={label}
          component="a"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {icon}
        </IconButton>
      ))}
    </Box>
  );
}
