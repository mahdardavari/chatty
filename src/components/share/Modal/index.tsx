"use client";
import { motion } from "framer-motion";
import "../styles/Modal.css";
import React, { FC, useEffect, useRef } from "react";
import Backdrop from "../Backdrop";

interface ModalProps {
  handleClose: () => void;
  children: React.ReactNode;
}

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const Modal: FC<ModalProps> = ({ children, handleClose }) => {
  const modalRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose(); // Close modal on ESC key press
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        handleClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClose]);

  const handleBackdropClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.stopPropagation();
    handleClose();
  };

  return (
    <>
      <Backdrop onClick={handleBackdropClick}>
        <motion.button
          ref={modalRef}
          onClick={(e) => e.stopPropagation()} // Prevent click from closing modal
          className="modal orange-gradient"
          variants={dropIn}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {children}
        </motion.button>
      </Backdrop>
    </>
  );
};

export default Modal;
