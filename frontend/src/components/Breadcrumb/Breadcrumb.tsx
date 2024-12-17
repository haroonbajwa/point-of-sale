import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { Box } from "@mui/material";

const Breadcrumb = () => {
  return (
    <Box mb={3}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        <Link underline="hover" color="inherit" href="/">
          Products
        </Link>
        <Typography sx={{ color: "text.primary" }}>product</Typography>
      </Breadcrumbs>
    </Box>
  );
};

export default Breadcrumb;
