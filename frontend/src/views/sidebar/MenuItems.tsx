import {
  Dashboard as DashboardIcon,
  ShoppingCart,
  Inventory,
  People,
  Assessment,
  Settings,
  Payment,
  HelpOutline,
} from "@mui/icons-material";
import { IMenuItem } from "./types";

export const menuItems: IMenuItem[] = [
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
      { name: "Stock Management", path: "/inventory/stockManagement" },
      { name: "Low Stock Alerts", path: "/inventory/lowStock" },
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
];

export const adminMenuItems: IMenuItem[] = [
  {
    name: "Settings",
    icon: <Settings />,
    subItems: [
      { name: "General Settings", path: "/settings/general" },
      { name: "Tax Configuration", path: "/settings/tax" },
    ],
  },
  {
    name: "User Management",
    icon: <People />,
    subItems: [
      { name: "Manage users", path: "userManagement/users" },
      { name: "Roles", path: "userManagement/roles" },
      { name: "Permissions", path: "userManagement/permissions" },
    ],
  },
  {
    name: "Help",
    icon: <HelpOutline />,
    subItems: [
      { name: "User Guide", path: "/help/userGuide" },
      { name: "Contact Support", path: "/help/contact" },
    ],
  },
];
