import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import * as styles from "./styles";
import menImage from "../../assets/men.jpg";
import womanImage from "../../assets/women.jpg";
import kidImage from "../../assets/kid.jpg";
function Catagories() {
  return (
    <Box>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={4}
        justifyContent="space-around"
        mt={5}
      >
        <Box
          sx={styles.styledBox}
          style={{ backgroundImage: `url(${kidImage})` }}
        >
          <Typography variant="h3" align="center" sx={styles.typograpy}>
            kids
          </Typography>
        </Box>
        <Box
          sx={styles.styledBox}
          style={{ backgroundImage: `url(${menImage})` }}
        >
          <Typography variant="h3" align="center" sx={styles.typograpy}>
            Men
          </Typography>
        </Box>
        <Box
          sx={styles.styledBox}
          style={{ backgroundImage: `url(${womanImage})` }}
        >
          <Typography variant="h3" align="center" sx={styles.typograpy}>
            woman
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
}

export default Catagories;
