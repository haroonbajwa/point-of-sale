import { useState } from "react";
import {
  Box,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  Switch,
  FormControlLabel,
  Grid2 as Grid,
  Divider,
  SelectChangeEvent,
} from "@mui/material";
import { FileUpload } from "@mui/icons-material";
import DataTable from "../../../components/DataTable/DataTable";
import { GridColDef } from "@mui/x-data-grid";

// example data
const parentCategories = ["Food", "Drinks", "Snacks"];

const CategoriesTable = () => {
  const [formValues, setFormValues] = useState({
    categoryCode: "",
    categoryName: "",
    parentCategory: "",
    description: "",
    categoryImage: null,
    stockTracking: false,
    defaultTaxRate: 0,
  });

  const handleInputChange = (e: React.ChangeEvent | SelectChangeEvent) => {
    const { name, value, checked, type, files } = e.target as HTMLInputElement;
    // Handling the value based on input type
    const newValue =
      type === "checkbox"
        ? checked
        : type === "number"
        ? Number(value)
        : files
        ? files[0]
        : value;

    setFormValues((prev) => ({
      ...prev,
      [name]: newValue,
    }));
  };

  const handleSubmit = () => {
    console.log("Submitted Data modal...", formValues);
  };

  const columns: GridColDef[] = [
    { field: "categoryImage", headerName: "Image", width: 130 },
    { field: "categoryCode", headerName: "Code", width: 70 },
    { field: "categoryName", headerName: "Name", width: 130 },
    { field: "parentCategory", headerName: "Parent category", width: 130 },
    { field: "description", headerName: "description", width: 130 },
    { field: "stockTracking", headerName: "Stock tracking", width: 130 },
    { field: "defaultTaxRate", headerName: "Default tax rate (%)", width: 130 },
  ];
  const data = [
    {
      id: 1,
      categoryImage: "https://example.com/image1.jpg",
      categoryCode: "CAT1",
      categoryName: "Electronics",
      parentCategory: "Root",
      description: "A category for electronic devices.",
      stockTracking: "Yes",
      defaultTaxRate: 10,
    },
    {
      id: 2,
      categoryImage: "https://example.com/image2.jpg",
      categoryCode: "CAT2",
      categoryName: "Clothing",
      parentCategory: "Root",
      description: "A category for clothing items.",
      stockTracking: "Yes",
      defaultTaxRate: 8,
    },
    {
      id: 3,
      categoryImage: "https://example.com/image3.jpg",
      categoryCode: "CAT3",
      categoryName: "Books",
      parentCategory: "Root",
      description: "A category for books.",
      stockTracking: "No",
      defaultTaxRate: 0,
    },
    {
      id: 4,
      categoryImage: "https://example.com/image4.jpg",
      categoryCode: "CAT4",
      categoryName: "Food",
      parentCategory: "Root",
      description: "A category for food items.",
      stockTracking: "Yes",
      defaultTaxRate: 12,
    },
    {
      id: 5,
      categoryImage: "https://example.com/image5.jpg",
      categoryCode: "CAT5",
      categoryName: "Furniture",
      parentCategory: "Root",
      description: "A category for furniture items.",
      stockTracking: "Yes",
      defaultTaxRate: 10,
    },
  ];

  const formElement = () => (
    <Box component="form">
      <Typography variant="h6" fontSize={18}>
        Basic Information
      </Typography>
      <Divider />

      <Grid container spacing={3} mt={3}>
        <Grid size={{ xs: 12, md: 4 }}>
          <TextField
            fullWidth
            label="Category Code"
            name="categoryCode"
            value={formValues.categoryCode}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <TextField
            fullWidth
            label="Category Name"
            name="categoryName"
            required
            value={formValues.categoryName}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <FormControl fullWidth>
            <InputLabel>Parent Category</InputLabel>
            <Select
              name="parentCategory"
              value={formValues.parentCategory}
              onChange={handleInputChange}
            >
              {parentCategories.map((category) => (
                <MenuItem key={category} value={category}>
                  {category}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid size={{ xs: 12 }}>
          <TextField
            fullWidth
            name="description"
            label="Description"
            multiline
            rows={4}
            value={formValues.description}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 3 }}>
          <FormControlLabel
            control={
              <Switch
                name="stockTracking"
                checked={formValues.stockTracking}
                onChange={handleInputChange}
              />
            }
            label="Enable Stock Tracking"
          />
        </Grid>
        <Grid size={{ xs: 12, md: 3 }}>
          <Button
            fullWidth
            sx={{ height: "100%" }}
            variant="outlined"
            component="label"
            startIcon={<FileUpload />}
          >
            Image
            <input
              name="categoryImage"
              type="file"
              hidden
              onChange={handleInputChange}
            />
          </Button>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <TextField
            fullWidth
            name="defaultTaxRate"
            label="Default Tax Rate (%)"
            type="number"
            value={formValues.defaultTaxRate}
            onChange={handleInputChange}
          />
        </Grid>
      </Grid>
    </Box>
  );

  return (
    <DataTable
      columns={columns}
      data={data}
      title="category"
      addModalBody={formElement()}
      handleAddSubmit={handleSubmit}
      addModalWidth={80}
    />
  );
};

export default CategoriesTable;
