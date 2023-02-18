import React from "react";
import PropTypes from "prop-types";
import styles from "./Drawer.module.css";
import { changeAnchor } from "../../helpers/change-anchor";

const Drawer = (props) => {
  const { open, anchor, onClose } = props;
  const {
    drawer,
    animate,
    hidden,
    overlay,
    overlayOpen,
    overlayHidden,
    header
  } = styles;

  return (
    <>
      <div
        className={`${overlay} ${!open && overlayHidden} ${
          open && overlayOpen
        }`}
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        tabIndex="-1"
        className={`${drawer} ${open && animate} ${
          !open && hidden
        } ${changeAnchor(anchor,styles)}`}
      >
        {props.children}
        {/* <div className={header} /> */}
      </div>
    </>
  );
};

Drawer.propTypes = {
  open: PropTypes.bool.isRequired,
  anchor: PropTypes.string.isRequired,
  // onClose: PropTypes.func.isRequired
};
export default Drawer