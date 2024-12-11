import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";

const Dashboard = () => <h1>Dashboard</h1>;
const PageNotFound = () => <h1>Page not found</h1>;

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
