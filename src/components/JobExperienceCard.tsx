import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

interface JobExperienceCardProps {
  company: string;
  role: string;
  time: string;
  description: string;
  actual?: boolean;
}

export default function JobExperienceCard({
  company,
  role,
  time,
  description,
  actual = false,
}: JobExperienceCardProps) {
  return (
    <Card
      sx={{
        minWidth: 300,
        backgroundColor: "background.paper",
        borderColor: "primary.dark",
        border: actual ? 1 : 0,
      }}
      elevation={4}
    >
      <CardContent>
        <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
          {time}
        </Typography>
        <Typography variant="h5" component="div">
          {role}
        </Typography>
        <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
          at {company}
        </Typography>
        <Typography variant="body2">{description}</Typography>
      </CardContent>
      <CardActions>
        <Button sx={{ backgroundColor: "secondary.main" }}>Learn More</Button>
      </CardActions>
    </Card>
  );
}
