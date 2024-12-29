import { useState } from "react";
import { Toolbar, Box, CssBaseline } from "@mui/material";
import { Outlet } from "react-router-dom";
import Appbar from "./views/appbar/Appbar";
import Sidebar from "./views/sidebar/Sidebar";

const Layout = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <CssBaseline />
      <Appbar toggleDrawer={toggleDrawer} />
      <Sidebar isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          overflow: "auto",
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
