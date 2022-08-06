import React from "react";
import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";
import Zoom from "@mui/material/Zoom";
import ProjectInfoTabs from "../ProjectInfoTabs";
import styles from "./style.module.css";

const ModalComponent = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <div className="cursor-pointer flex" onClick={handleOpen}>
        {props.children}
      </div>
      <Modal
        className="flex items-center justify-center"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Zoom in={open}>
          <div className={styles.ModalComponentWrapper}>
            <p className={styles.ModalComponentTitle}>{props.item.name}</p>
            <ProjectInfoTabs {...props} />
          </div>
        </Zoom>
      </Modal>
    </React.Fragment>
  );
};

export default ModalComponent;
