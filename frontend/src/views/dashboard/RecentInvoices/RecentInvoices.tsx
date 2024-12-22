import { MoreVert } from "@mui/icons-material";
import { IconButton, Menu, MenuItem, Paper } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useState } from "react";

const RecentInvoices = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const renderActionButtons = () => (
    <div>
      <IconButton
        edge="start"
        color="inherit"
        aria-haspopup="true"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MoreVert />
      </IconButton>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem onClick={handleClose}>View</MenuItem>
        <MenuItem onClick={handleClose}>Edit</MenuItem>
        <MenuItem onClick={handleClose}>Delete</MenuItem>
      </Menu>
    </div>
  );

  // Column Definitions for Order Invoices
  const invoiceColumns: GridColDef[] = [
    {
      field: "invoiceNumber",
      headerName: "Invoice #",
      flex: 0.7,
      minWidth: 120,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "dateTime",
      headerName: "Date & Time",
      flex: 1,
      minWidth: 180,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "customerName",
      headerName: "Customer Name",
      flex: 1.2,
      minWidth: 200,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "totalAmount",
      headerName: "Total Amount ($)",
      flex: 1,
      minWidth: 120,
      headerAlign: "center",
      align: "center",
      //   renderCell: (params) => `$${params.value.toFixed(2)}`,
    },
    {
      field: "paymentMethod",
      headerName: "Payment Method",
      flex: 1,
      minWidth: 150,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "cashierName",
      headerName: "Cashier",
      flex: 1,
      minWidth: 150,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "actions",
      headerName: "Actions",
      flex: 0.7,
      minWidth: 100,
      sortable: false,
      headerAlign: "center",
      align: "center",
      renderCell: renderActionButtons,
    },
  ];

  const orderInvoices = [
    {
      id: 1,
      invoiceNumber: "INV-00123",
      customerName: "John Doe",
      orderDate: "2024-06-01",
      dueDate: "2024-06-10",
      amount: 240.5,
      paymentStatus: "Paid",
    },
    {
      id: 2,
      invoiceNumber: "INV-00124",
      customerName: "Jane Smith",
      orderDate: "2024-06-02",
      dueDate: "2024-06-12",
      amount: 120.75,
      paymentStatus: "Pending",
    },
    {
      id: 3,
      invoiceNumber: "INV-00125",
      customerName: "Alice Johnson",
      orderDate: "2024-06-03",
      dueDate: "2024-06-15",
      amount: 500.0,
      paymentStatus: "Overdue",
    },
  ];

  return (
    <Paper>
      <DataGrid
        columns={invoiceColumns}
        rows={orderInvoices}
        initialState={{
          pagination: { paginationModel: { page: 0, pageSize: 5 } },
        }}
        pageSizeOptions={[5, 10]}
        hideFooterSelectedRowCount
      />
    </Paper>
  );
};

export default RecentInvoices;
