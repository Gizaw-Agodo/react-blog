import React from "react";
import { Box, Grid } from "@mui/material";
import CardComponent from "../card/Card";

import image from "../../assets/logo4.jpg";
function Recents() {
  return (
    <Box>
      <Grid container mt={3} columnSpacing={2} rowSpacing={1}>
        <Grid item>
          <CardComponent img={image} />
        </Grid>
        <Grid item xs={12} md={6}>
          <CardComponent img={image} />
        </Grid>
        <Grid item xs={12} md={6}>
          <CardComponent img={image} />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Recents;
