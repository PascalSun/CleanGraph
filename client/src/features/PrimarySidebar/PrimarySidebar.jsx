import React from "react";
import Overview from "./Overview";
import Subgraphs from "./Subgraphs";
import { Box, Drawer, Toolbar } from "@mui/material";
import { DRAWER_WIDTH, ZIndexes } from "../../shared/constants";

const PrimarySidebar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: DRAWER_WIDTH,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: DRAWER_WIDTH,
          boxSizing: "border-box",
        },
        zIndex: ZIndexes.level1,
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: "auto" }}>
        <Overview />
        <Subgraphs />
      </Box>
    </Drawer>
  );
};

export default PrimarySidebar;
