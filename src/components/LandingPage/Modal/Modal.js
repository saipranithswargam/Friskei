import React from "react";
import classes from "./Modal.module.css";
import CloseIcon from "@mui/icons-material/Close";
const ProductModal = (props) => {
  return (
    <div className={classes.overlay}>
      <div className={classes.backdrop} onClick={props.onRemoveBackdrop}/>
      <div className={classes.productModalContainer} >
        <button className={classes.closeButton} onClick={props.onRemoveBackdrop}>
          <CloseIcon />
        </button>
        <div className={classes.modalImage}>
          <img
            src={props.image}
            alt="productImage"
          />
        </div>
        <div className={classes.modalContent}>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
