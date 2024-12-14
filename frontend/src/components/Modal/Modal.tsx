import * as React from "react";
import {
  Backdrop,
  Box,
  Modal,
  Fade,
  Button,
  Typography,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  borderRadius: "10px",
  maxHeight: "calc(100vh - 50px)",
  boxShadow: 20,
  p: 4,
};

interface IModal {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  body: React.ReactNode;
  width: number;
  onSubmit: () => void;
}

const ModalComponent: React.FC<IModal> = ({
  isOpen,
  onClose,
  title,
  body,
  width,
  onSubmit,
}) => {
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={isOpen}
        onClose={onClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={isOpen}>
          <Box sx={{ ...style, width: `${width}%` }}>
            {/* Modal header */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography variant="h3" fontSize={36} component="h2">
                {title}
              </Typography>
              <IconButton onClick={onClose}>
                <CloseIcon />
              </IconButton>
            </Box>

            {/* Modal body */}
            <Box
              mt={4}
              sx={{
                overflowY: "auto",
                maxHeight: "calc(100vh - 270px)",
                paddingRight: "8px",
              }}
            >
              {body}
            </Box>

            {/* Modal footer */}
            <Box
              mt={4}
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                gap: 2,
              }}
            >
              <Button variant="contained" color="primary" onClick={onSubmit}>
                Save
              </Button>
              <Button variant="outlined" onClick={onClose}>
                Cancel
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default ModalComponent;
