import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  OutlinedInput,
} from "@mui/material";

interface ForgotPasswordProps {
  open: boolean;
  handleClose: () => void;
}

const ForgotPassword = ({ open, handleClose }: ForgotPasswordProps) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Reset password</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Enter your account's email address, and we'll send you a link to reset
          your password.
        </DialogContentText>
        <OutlinedInput
          sx={{ mt: 3 }}
          autoFocus
          required
          margin="dense"
          id="email"
          name="email"
          label="Email address"
          placeholder="Email address"
          type="email"
          fullWidth
        />
      </DialogContent>
      <DialogActions sx={{ pb: 3, px: 3 }}>
        <Button onClick={handleClose}>Cancel</Button>
        <Button variant="contained" type="submit" color="secondary">
          Continue
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ForgotPassword;
