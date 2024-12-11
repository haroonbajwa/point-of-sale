import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Drawer,
  List,
  ListItemIcon,
  ListItemText,
  CssBaseline,
  Divider,
  ListItemButton,
  Collapse,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Notifications,
  AccountCircle,
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
import { Outlet, useNavigate } from "react-router-dom";

interface SubMenu {
  name: string;
  path: string;
}

interface MenuItem {
  name: string;
  icon: React.ReactNode;
  subItems?: SubMenu[];
}

const drawerWidth = 300;

const Layout = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});

  const navigate = useNavigate();

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleCollapseToggle = (name: string) => {
    setOpenItems((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  const menuItems: MenuItem[] = [
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
        { name: "Add/Edit/Delete Product", path: "/inventory/manage-products" },
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
    <Box sx={{ display: "flex", height: "100vh" }}>
      <CssBaseline />

      {/* Top Bar */}
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
            POS System
          </Typography>
          <IconButton color="inherit">
            <Notifications />
          </IconButton>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Sidebar */}
      <Drawer
        variant="temporary"
        open={isDrawerOpen}
        onClose={toggleDrawer}
        sx={{
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflowY: "auto" }}>
          <List>
            {menuItems.map((item) => (
              <React.Fragment key={item.name}>
                <ListItemButton onClick={() => handleCollapseToggle(item.name)}>
                  <ListItemIcon sx={{ minWidth: "40px" }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.name} />
                  {openItems[item.name] ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse
                  in={openItems[item.name]}
                  timeout="auto"
                  unmountOnExit
                >
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
