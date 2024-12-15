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

// Example product categories
const productCategories = [
  "Electronics",
  "Clothing",
  "Books",
  "Home Appliances",
];

const ProductsTable = () => {
  const [formValues, setFormValues] = useState({
    productName: "",
    productSKU: "",
    category: "",
    price: 0,
    stockQuantity: 0,
    description: "",
    productImage: null,
    isActive: true,
  });

  const handleInputChange = (e: React.ChangeEvent | SelectChangeEvent) => {
    const { name, value, checked, type, files } = e.target as HTMLInputElement;

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
    console.log("Submitted Product Data:", formValues);
  };

  const formElement = () => (
    <Box component="form">
      <Typography variant="h6" fontSize={18}>
        Product Information
      </Typography>
      <Divider />

      <Grid container spacing={3} mt={3}>
        <Grid size={{ xs: 12, md: 4 }}>
          <TextField
            fullWidth
            label="Product Name"
            name="productName"
            required
            value={formValues.productName}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <TextField
            fullWidth
            label="Product SKU"
            name="productSKU"
            required
            value={formValues.productSKU}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <FormControl fullWidth>
            <InputLabel>Category</InputLabel>
            <Select
              name="category"
              value={formValues.category}
              onChange={handleInputChange}
            >
              {productCategories.map((category) => (
                <MenuItem key={category} value={category}>
                  {category}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <TextField
            fullWidth
            name="price"
            label="Price ($)"
            type="number"
            value={formValues.price}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <TextField
            fullWidth
            name="stockQuantity"
            label="Stock Quantity"
            type="number"
            value={formValues.stockQuantity}
            onChange={handleInputChange}
          />
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
                name="isActive"
                checked={formValues.isActive}
                onChange={handleInputChange}
              />
            }
            label="Is Active"
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
            Upload Image
            <input
              name="productImage"
              type="file"
              hidden
              onChange={handleInputChange}
            />
          </Button>
        </Grid>
      </Grid>
    </Box>
  );

  return (
    <DataTable
      title="product"
      addModalBody={formElement()}
      handleAddSubmit={handleSubmit}
      addModalWidth={80}
    />
  );
};

export default ProductsTable;
