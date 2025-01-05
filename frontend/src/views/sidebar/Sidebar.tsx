import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  Box,
  Collapse,
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import { ISidebar } from "./types";
import { adminMenuItems, menuItems } from "./MenuItems";

const drawerWidth = 300;

const Sidebar = ({ isDrawerOpen, toggleDrawer }: ISidebar) => {
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});

  const navigate = useNavigate();

  const handleCollapseToggle = (name: string) => {
    setOpenItems((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    <Drawer
      variant="temporary"
      open={isDrawerOpen}
      onClose={toggleDrawer}
      sx={{
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          color: "primary.contrastText",
          backgroundColor: "primary.light",
        },
      }}
    >
      <Toolbar />
      <Box sx={{ overflowY: "auto" }}>
        <List>
          {menuItems.map((item) => (
            <React.Fragment key={item.name}>
              <ListItemButton onClick={() => handleCollapseToggle(item.name)}>
                <ListItemIcon
                  sx={{ minWidth: "40px", color: "primary.contrastText" }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.name} />
                {openItems[item.name] ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={openItems[item.name]} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {item.subItems?.map((subItem) => (
                    <ListItemButton
                      key={subItem.name}
                      onClick={() => {
                        navigate(subItem.path);
                        toggleDrawer();
                      }}
                    >
                      <ListItemText
                        sx={{ paddingLeft: "50px" }}
                        primary={subItem.name}
                      />
                    </ListItemButton>
                  ))}
                </List>
              </Collapse>
            </React.Fragment>
          ))}
        </List>
      </Box>
      <Box marginTop="auto">
        <Divider textAlign="left" sx={{ fontSize: "14px" }}>
          Admin Tools
        </Divider>
        <List>
          {adminMenuItems.map((item) => (
            <React.Fragment key={item.name}>
              <ListItemButton onClick={() => handleCollapseToggle(item.name)}>
                <ListItemIcon
                  sx={{ minWidth: "40px", color: "primary.contrastText" }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.name} />
                {openItems[item.name] ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={openItems[item.name]} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {item.subItems?.map((subItem) => (
                    <ListItemButton
                      key={subItem.name}
                      onClick={() => {
                        navigate(subItem.path);
                        toggleDrawer();
                      }}
                    >
                      <ListItemText
                        sx={{ paddingLeft: "50px" }}
                        primary={subItem.name}
                      />
                    </ListItemButton>
                  ))}
                </List>
              </Collapse>
            </React.Fragment>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
