import { Box } from "@mui/material";
import { Container, Stack } from "@mui/system";
import React from "react";
import Catagories from "../catagoris/Catagories";
import Hero from "../hero/Hero";
import Recents from "../recents/Recents";
import RightBar from "../rightBar/RightBar";

function Home() {
  return (
    <Box>
      <Hero />
      <Container>
        <Catagories />
        <Stack
          direction={{ md: "row", xs: "columun-reverse" }}
          spacing={8}
          mt={8}
        >
          <Box flex={3} sx={{ padding: "18px 100px 100px 100px" }}>
            <Recents flex={3} />
          </Box>
          <Box flex={1}>
            <RightBar />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

export default Home;
