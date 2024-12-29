import { AccountCircle, Menu, Notifications } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";

const Appbar = ({ toggleDrawer }: { toggleDrawer: () => void }) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer}
          sx={{ mr: 2 }}
        >
          <Menu />
        </IconButton>
        <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
          POS System
        </Typography>
        <IconButton color="inherit">
          <Notifications />
        </IconButton>
        <IconButton color="inherit">
          <AccountCircle />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;
