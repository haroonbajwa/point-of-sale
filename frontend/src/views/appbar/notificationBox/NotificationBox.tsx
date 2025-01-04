import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import Switch from "@mui/material/Switch";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Paper } from "@mui/material";

// Define a custom hook to manage the "Only show unread" state
function useUnreadFilter() {
  const [showUnreadOnly, setShowUnreadOnly] = React.useState(false);

  const handleUnreadFilterChange = () => {
    setShowUnreadOnly(!showUnreadOnly);
  };

  return { showUnreadOnly, handleUnreadFilterChange };
}

const NotificationBox = () => {
  const { showUnreadOnly, handleUnreadFilterChange } = useUnreadFilter();

  const notifications = [
    {
      id: 1,
      heading: "Low Inventory Alert",
      message:
        "Inventory for 'Apple' is below the reorder point. Current stock: 10, Reorder point: 20",
      unread: true,
    },
    {
      id: 2,
      heading: "New Order Received",
      message:
        "A new online order has been placed. Order ID: #1234, Customer: John Doe",
      unread: true,
    },
    {
      id: 3,
      heading: "Payment Received",
      message:
        "Payment for invoice #5678 has been received. Amount: $100.00, Payment method: Credit Card",
      unread: false,
    },
    {
      id: 4,
      heading: "Staff Clock-in",
      message:
        "John Smith has clocked in for their shift. Clock-in time: 9:00 AM",
      unread: false,
    },
  ];

  const filteredNotifications = showUnreadOnly
    ? notifications.filter((notification) => notification.unread)
    : notifications;

  return (
    <Box
      padding={2}
      sx={{ width: 400, height: "50%", bgcolor: "background.paper" }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography variant="h6">Notifications</Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="body2">Only show unread</Typography>
          <Switch
            checked={showUnreadOnly}
            onChange={handleUnreadFilterChange}
          />
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </Box>
      </Box>

      <List sx={{ p: 0 }}>
        {filteredNotifications.map((notification) => (
          <Paper
            elevation={1}
            key={notification.id}
            sx={{ mb: 1, position: "relative" }}
          >
            <ListItem>
              <ListItemText
                primary={notification.heading}
                secondary={notification.message}
              />
            </ListItem>
            {notification.unread && (
              <Box
                sx={{
                  position: "absolute",
                  top: "15px",
                  right: "15px",
                  width: "5px",
                  height: "5px",
                  borderRadius: "50%",
                  backgroundColor: "primary.main",
                }}
              ></Box>
            )}
          </Paper>
        ))}
      </List>
    </Box>
  );
};

export default NotificationBox;
