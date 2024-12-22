import { useState } from "react";
import {
  DataGrid,
  GridColDef,
  GridRenderCellParams,
  GridSearchIcon,
  GridValidRowModel,
} from "@mui/x-data-grid";
import { Box, Button, IconButton, InputBase } from "@mui/material";
import Paper from "@mui/material/Paper";
import { Add, ContentCopy, Delete, Edit } from "@mui/icons-material";
import ModalComponent from "../Modal/Modal";

const paginationModel = { page: 0, pageSize: 5 };

interface DataTable {
  columns: GridColDef[];
  data: GridValidRowModel[];
  title: string;
  addModalBody: React.ReactNode;
  handleAddSubmit: () => void;
  addModalWidth: number;
}

const DataTable: React.FC<DataTable> = ({
  columns,
  data,
  title,
  addModalBody,
  handleAddSubmit,
  addModalWidth,
}) => {
  const [open, setOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  // Filtered rows based on search value
  const filteredRows = data.filter((row) =>
    Object.values(row).some((value) =>
      value?.toString().toLowerCase().includes(searchValue.toLowerCase())
    )
  );

  // Add actions column dynamically
  const tableColumns: GridColDef[] = [
    ...(columns.map((col) => ({
      ...col,
      flex: 1,
      headerAlign: "center",
      align: "center",
    })) as GridColDef[]),
    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      sortable: false,
      headerAlign: "center",
      renderCell: (params: GridRenderCellParams) => (
        <Box gap={1} display="flex" justifyContent="center">
          <IconButton
            aria-label="edit"
            onClick={() => console.log(params, "handle edit")}
          >
            <Edit />
          </IconButton>

          <IconButton
            aria-label="clone"
            onClick={() => console.log("handle clone")}
          >
            <ContentCopy />
          </IconButton>

          <IconButton
            aria-label="delete"
            onClick={() => console.log("handle delete")}
          >
            <Delete />
          </IconButton>
        </Box>
      ),
    },
  ];

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "10px",
        }}
      >
        <Paper
          component="form"
          sx={{
            display: "flex",
            alignItems: "center",
            width: 300,
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search"
            inputProps={{ "aria-label": "search" }}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <IconButton type="button" sx={{ p: "5px" }} aria-label="search">
            <GridSearchIcon />
          </IconButton>
        </Paper>

        <Button
          variant="outlined"
          sx={{
            fontWeight: "bold",
            ":hover": {
              backgroundColor: "primary.main",
              color: "primary.contrastText",
            },
          }}
          startIcon={<Add />}
          onClick={() => setOpen(true)}
        >
          Add {title}
        </Button>
      </Box>
      <Paper>
        <DataGrid
          columns={tableColumns}
          rows={filteredRows}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10]}
          hideFooterSelectedRowCount
          sx={{ border: 0 }}
        />
      </Paper>

      {/* Add record Modal */}
      <ModalComponent
        isOpen={open}
        onClose={() => setOpen(false)}
        title={`Add new ${title}`}
        body={addModalBody}
        width={addModalWidth}
        onSubmit={handleAddSubmit}
      />
    </>
  );
};

export default DataTable;
