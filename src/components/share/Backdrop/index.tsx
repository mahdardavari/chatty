import React, { FC } from "react";
import { motion } from "framer-motion";

interface BackdropProps {
  onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  children: React.ReactNode;
}

const Backdrop: FC<BackdropProps> = ({ onClick, children }) => {
  return (
    <>
      <motion.div
        className="backdrop"
        onClick={onClick}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default Backdrop;
