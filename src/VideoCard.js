import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default ({ title, previewImage, releaseDate, genre, viewCount }) => {
  return (
    <Card sx={{ height: 300 }}>
      <CardMedia
        sx={{ height: 140 }}
        component="img"
        height="140"
        image={previewImage}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {genre}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {viewCount} views
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {releaseDate}
        </Typography>
      </CardContent>
    </Card>
  );
};
