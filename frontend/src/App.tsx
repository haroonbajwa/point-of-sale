import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import ProductsTable from "./views/inventory/products/ProductsTable";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import CategoriesTable from "./views/inventory/categories/CategoriesTable";
import { createTheme, ThemeProvider } from "@mui/material";

const Dashboard = () => <h1>Dashboard</h1>;

const theme = createTheme({
  palette: {
    primary: {
      light: "#213264",
      main: "#071952",
      dark: "#03092F",
      contrastText: "#fff",
    },
    secondary: {
      light: "#B64AFF",
      main: "#9400FF",
      dark: "#7200CC",
      contrastText: "#fff",
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="*" element={<PageNotFound />} />
            <Route index element={<Dashboard />} />

            {/* products routes */}
            <Route path="/inventory/products" element={<ProductsTable />} />
            <Route path="/inventory/categories" element={<CategoriesTable />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
