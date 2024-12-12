import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import ProductsTable from "./views/inventory/products/ProductsTable";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import AddCategory from "./views/inventory/categories/AddCategory";

const Dashboard = () => <h1>Dashboard</h1>;

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="*" element={<PageNotFound />} />
          <Route index element={<Dashboard />} />

          {/* products routes */}
          <Route path="/inventory/products" element={<ProductsTable />} />
          <Route path="/inventory/categories" element={<AddCategory />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
