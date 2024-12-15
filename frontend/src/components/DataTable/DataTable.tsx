import { useState } from "react";
import { DataGrid, GridColDef, GridSearchIcon } from "@mui/x-data-grid";
import { Box, Button, IconButton, InputBase } from "@mui/material";
import Paper from "@mui/material/Paper";
import { Add } from "@mui/icons-material";
import ModalComponent from "../Modal/Modal";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

const paginationModel = { page: 0, pageSize: 5 };

interface DataTable {
  title: string;
  addModalBody: React.ReactNode;
  handleAddSubmit: () => void;
  addModalWidth: number;
}

const DataTable: React.FC<DataTable> = ({
  title,
  addModalBody,
  handleAddSubmit,
  addModalWidth,
}) => {
  const [open, setOpen] = useState(false);
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
          />
          <IconButton type="button" sx={{ p: "5px" }} aria-label="search">
            <GridSearchIcon />
          </IconButton>
        </Paper>

        <Button
          variant="contained"
          startIcon={<Add />}
          onClick={() => setOpen(true)}
        >
          Add {title}
        </Button>
      </Box>
      <Paper>
        <DataGrid
          rows={rows}
          columns={columns}
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
