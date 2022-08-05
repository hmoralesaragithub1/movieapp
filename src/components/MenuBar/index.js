import React from "react";

import { AppBar, Toolbar, Typography } from "@mui/material";

const MenuBar = ({ text, children }) => {
  return (
    <AppBar position="static" mb={5}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {text}
        </Typography>

        {children}
      </Toolbar>
    </AppBar>
  );
};

export default MenuBar;
