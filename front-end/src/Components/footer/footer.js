import { Box, Stack, Typography } from "@mui/material";
import React from "react";

function Footer() {
  return (
    <Box sx={{ background: "black", height: "200px", paddingTop: "20px" }}>
      <Stack direction="row" paddingTop={3}>
        <Box flex={1}>
          <Typography color="white" variant="h6" align="center">
            Contac Us{" "}
          </Typography>
          <Typography align="center" color="white">
            Facebook
          </Typography>
          <Typography align="center" color="white">
            Telegram{" "}
          </Typography>
          <Typography align="center" color="white">
            Twitter{" "}
          </Typography>
        </Box>
        <Box flex={1} paddingRight="40px">
          <Typography align="center" color="white" variant="h6">
            Data Policy{" "}
          </Typography>
          <Typography align="center" color="white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quae,
            magni reprehenderit dicta sit quos alias dolores eos ex dolore
            dolorem expedita aperiam, facere facilis mollitia odit animi veniam
            dignissimos.{" "}
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
}

export default Footer;
