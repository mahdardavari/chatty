"use client";
import { useModalCloseListeners } from "@/app/hooks/useModalCloseListeners";
import { motion, Variants } from "framer-motion";
import React, { FC } from "react";
import Backdrop from "../Backdrop";
import "../styles/Modal.css";

interface ModalProps {
  handleClose: () => void;
  children: React.ReactNode;
  direction: "up" | "down" | "left" | "right";
}

const getVariants = (direction: string): Variants => {
  let variants: Variants;
  switch (direction) {
    case "up":
      variants = {
        hidden: { y: "-100vh", opacity: 0 },
        visible: { y: "0", opacity: 1 },
        exit: { y: "-100vh", opacity: 0 },
      };
      break;
    case "down":
      variants = {
        hidden: { y: "100vh", opacity: 0 },
        visible: { y: "0", opacity: 1 },
        exit: { y: "100vh", opacity: 0 },
      };
      break;
    case "left":
      variants = {
        hidden: { x: "-100vw", opacity: 0 },
        visible: { x: "0", opacity: 1 },
        exit: { x: "-100vw", opacity: 0 },
      };
      break;
    case "right":
      variants = {
        hidden: { x: "100vw", opacity: 0 },
        visible: { x: "0", opacity: 1 },
        exit: { x: "100vw", opacity: 0 },
      };
      break;
    default:
      variants = {
        hidden: { y: "-100vh", opacity: 0 },
        visible: { y: "0", opacity: 1 },
        exit: { y: "-100vh", opacity: 0 },
      };
  }
  return variants;
};

const Modal: FC<ModalProps> = ({ children, handleClose, direction = "up" }) => {
  const dropIn = getVariants(direction);

  const handleBackdropClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.stopPropagation();
    handleClose();
  };

  const modalRef = useModalCloseListeners(handleClose);
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
