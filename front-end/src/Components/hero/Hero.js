import { Box, Typography } from "@mui/material";
import React from "react";
import logo from "../../assets/mc.jpg";
function Hero() {
  return (
    <div>
      <Typography variant="h3" align="center" sx={{ fontWeight: 500 }}>
        Fashion Blog
      </Typography>
      <Typography variant="body2" align="center" sx={{ fontWeight: 400 }}>
        the way we live
      </Typography>
      <Box
        sx={{
          backgroundImage: `url(${logo})`,
          backgroundRepeat: "no-repeat",
          backgroundColor: "black",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          height: 450,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            background: "white",
            width: { xs: "90%", md: "40%" },
            opacity: 0.8,
            padding: "50px",
          }}
        >
          <Typography variant="h6" color="tomato" pt="8" align="center">
            Trending Styles
          </Typography>
          <Typography variant="h4" color="tomato" align="center">
            Life is boring with out Fashion
          </Typography>
          <Typography variant="body2" align="center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            labore ipsum est facilis consequuntur nulla temporibus animi
            aspernatur quas. Veritatis?
          </Typography>
        </Box>
      </Box>
    </div>
  );
}

export default Hero;
