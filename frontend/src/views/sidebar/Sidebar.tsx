import {
  ExpandLess,
  ExpandMore,
  Dashboard as DashboardIcon,
  ShoppingCart,
  Inventory,
  People,
  Assessment,
  Settings,
  Payment,
  HelpOutline,
} from "@mui/icons-material";
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
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IMenuItem, ISidebar } from "./types";

const drawerWidth = 300;

const Sidebar = ({ isDrawerOpen, toggleDrawer }: ISidebar) => {
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});

  const navigate = useNavigate();

  const handleCollapseToggle = (name: string) => {
    setOpenItems((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  const menuItems: IMenuItem[] = [
    {
      name: "Dashboard",
      icon: <DashboardIcon />,
      subItems: [
        { name: "Overview of Sales", path: "/dashboard/overview" },
        { name: "Total Revenue", path: "/dashboard/revenue" },
        { name: "Top-selling Products", path: "/dashboard/products" },
        { name: "Recent Activity Log", path: "/dashboard/activity" },
      ],
    },
    {
      name: "Sales",
      icon: <ShoppingCart />,
      subItems: [
        { name: "New Sale", path: "/sales/new" },
        { name: "Sales History", path: "/sales/history" },
        { name: "Refunds/Returns", path: "/sales/refunds" },
      ],
    },
    {
      name: "Inventory",
      icon: <Inventory />,
      subItems: [
        { name: "Products", path: "/inventory/products" },
        { name: "Categories", path: "/inventory/categories" },
        { name: "Stock Management", path: "/inventory/stock-management" },
        { name: "Low Stock Alerts", path: "/inventory/low-stock" },
      ],
    },
    {
      name: "Employees",
      icon: <People />,
      subItems: [
        { name: "Employee List", path: "/employees/list" },
        { name: "Roles and Permissions", path: "/employees/roles" },
      ],
    },
    {
      name: "Reports",
      icon: <Assessment />,
      subItems: [
        { name: "Sales Report", path: "/reports/sales" },
        { name: "Product Performance", path: "/reports/products" },
      ],
    },
    {
      name: "Payments",
      icon: <Payment />,
      subItems: [
        { name: "Payment Transactions", path: "/payments/transactions" },
        { name: "Payment Gateway Setup", path: "/payments/setup" },
      ],
    },
    {
      name: "Settings",
      icon: <Settings />,
      subItems: [
        { name: "General Settings", path: "/settings/general" },
        { name: "Tax Configuration", path: "/settings/tax" },
      ],
    },
    {
      name: "Help",
      icon: <HelpOutline />,
      subItems: [
        { name: "User Guide", path: "/help/user-guide" },
        { name: "Contact Support", path: "/help/contact" },
      ],
    },
  ];

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

        <Divider />
      </Box>
    </Drawer>
  );
};

export default Sidebar;
