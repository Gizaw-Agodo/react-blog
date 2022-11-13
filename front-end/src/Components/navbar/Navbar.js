import React, { useState } from "react";
import {
  AppBar,
  Box,
  InputBase,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
} from "@mui/material";
import { Facebook, Instagram, Twitter } from "@material-ui/icons";
import MenuIcon from "@material-ui/icons/Menu";
function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <AppBar position="static">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: 5,
            }}
          >
            <Facebook />
            <Instagram />
            <Twitter />
          </Box>
          <Box
            sx={{
              display: { xs: "none", sm: "none", md: "flex" },
              gap: 5,
            }}
          >
            <Typography>Home</Typography>
            <Typography>Products</Typography>
            <Typography>Portifolio</Typography>
            <Typography>Contact</Typography>
            <Typography>Blog</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: 15,
            }}
          ></Box>
          <Box sx={{ display: "flex" }}>
            <InputBase placeholder="search..." style={{ color: "white" }} />
            <MenuIcon
              onClick={() => setOpen(!open)}
              style={{
                cursor: "pointer",
                display: { xs: "block", sm: "block", md: "none" },
              }}
            />
          </Box>
        </Toolbar>
        <Menu
          onClose={() => setOpen(!open)}
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          // anchorEl={anchorEl}
          open={open}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <Box sx={{ height: "70vh", width: 250 }}>
            <MenuItem>Home</MenuItem>
            <MenuItem>Product</MenuItem>
            <MenuItem>Portifolio</MenuItem>
            <MenuItem>contact</MenuItem>
            <MenuItem>Blog</MenuItem>
          </Box>
        </Menu>
      </AppBar>
    </div>
  );
}

export default Navbar;
