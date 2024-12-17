import { MoreVert } from "@mui/icons-material";
import { IconButton, Paper } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const RecentInvoices = () => {
  const renderActionButtons = () => (
    <IconButton
      edge="start"
      color="inherit"
      aria-label="menu"
      //   onClick={toggleDrawer}
      sx={{ mr: 2 }}
    >
      <MoreVert />
    </IconButton>
  );

  // Column Definitions for Order Invoices
  const invoiceColumns: GridColDef[] = [
    {
      field: "invoiceNumber",
      headerName: "Invoice #",
      flex: 0.7,
      minWidth: 120,
      headerAlign: "left",
      align: "left",
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
    },
    {
      field: "totalAmount",
      headerName: "Total Amount ($)",
      headerAlign: "right",
      align: "right",
      flex: 1,
      minWidth: 120,
      //   renderCell: (params) => `$${params.value.toFixed(2)}`,
    },
    {
      field: "paymentMethod",
      headerName: "Payment Method",
      flex: 1,
      minWidth: 150,
    },
    {
      field: "cashierName",
      headerName: "Cashier",
      flex: 1,
      minWidth: 150,
    },
    {
      field: "actions",
      headerName: "Actions",
      flex: 0.7,
      minWidth: 100,
      sortable: false,
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
        sx={{ border: 0 }}
      />
    </Paper>
  );
};

export default RecentInvoices;
