import { AccountCircle, Menu, Notifications } from "@mui/icons-material";
import {
  AppBar,
  IconButton,
  Popover,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import NotificationBox from "./notificationBox/NotificationBox";

const Appbar = ({ toggleDrawer }: { toggleDrawer: () => void }) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

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
        <IconButton aria-describedby={id} color="inherit" onClick={handleClick}>
          <Notifications />
        </IconButton>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <NotificationBox />
        </Popover>

        <IconButton color="inherit">
          <AccountCircle />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;
