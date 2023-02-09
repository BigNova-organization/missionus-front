import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import InputFeilds from "../outils/InputFeilds";
import Space from "../outils/Space";
import { useTheme } from "@mui/material";
import { memo } from "react";
import { PrimaryText } from "../utils/typography";

const ModalAdd = memo(
  ({ open, onClose, title, Ajouter, onChange, disable, value, label }) => {
    const theme = useTheme();

    const style = {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: 400,
      bgcolor: theme.palette.neutral.main,
      color: "black",
      boxShadow: 24,
      p: 3,
      borderRadius: 1,
    };

    return (
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={
          {
            // backgroundColor:"#000"
          }
        }
      >
        <Box sx={style}>
          <PrimaryText
            fontWeight={"500"}
            fontSize={"25px"}
            text={title}
            color={theme.palette.secondary.light}
            cursor
          />
          <Space space={"30px"} />

          <InputFeilds label={label} margin onChange={onChange} value={value} />
          <Space space={"15px"} />

          <Box component={"div"} style={{ paddingTop: 20, float: "right" }}>
            <Button
              variant="contained"
              size="medium"
              color="error"
              onClick={onClose}
              sx={{ marginRight: 2 }}
            >
              annuler
            </Button>
            <Button
              variant="contained"
              size="medium"
              onClick={() => {
                if (disable) {
                  return;
                } else {
                  Ajouter();
                }
              }}
              sx={{
                bgcolor: disable
                  ? theme.palette.grey[600]
                  : theme.palette.secondary[700],
              }}
            >
              Ajouter
            </Button>
          </Box>
        </Box>
      </Modal>
    );
  }
);

export default ModalAdd;
