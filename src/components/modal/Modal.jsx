

import React from "react";
import { useEffect } from "react";
import ReactDom from "react-dom";
import {StyledOverlay, StyledModal, StyledButton} from "./Modal.styled";


const Modal = ({ onClose, children }) => {
  useEffect(() => {
    window.addEventListener("keydown", handleEscape);
    const body = document.querySelector("body");
    body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleEscape);
      window.removeEventListener("click", handleButtonClick);
      const body = document.querySelector("body");
      body.style.overflow = "auto";
    };
  });

  const handleEscape = (event) => {
    if (event.code === "Escape") {
      onClose();
    }
  };

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  const handleButtonClick = (event) => {
    if (event.target.tagName === "BUTTON") {
      console.log(event.target.tagName);
      onClose();
    }
  };

  return ReactDom.createPortal(
    <StyledOverlay
      onClick={handleBackdropClick}
    >
      <StyledModal >
        <StyledButton  onClick={handleButtonClick} />
        {children}
      </StyledModal>
    </StyledOverlay>,
    document.getElementById("modal-root")
  );
};

export default Modal;
