import { CardContent, CardMedia, Typography, Card } from "@mui/material";
import React from "react";

function CardComponent({ img }) {
  return (
    <div>
      <Card>
        <CardMedia
          component="img"
          height="100%"
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default CardComponent;
