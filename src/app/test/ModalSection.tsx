"use client";
import Modal from "@/components/share/Modal";
import { AnimatePresence, motion } from "framer-motion";
import useModal from "../hooks/useModal";

const ModalSection = () => {
  const { modalOpen, close, open } = useModal();
  return (
    <div>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="border p-2"
        onClick={modalOpen ? close : open}
      >
        Launch modal
      </motion.button>

      <AnimatePresence
        // Disable any initial animations on children that
        // are present when the component is first rendered
        initial={false}
        // Only render one component at a time.
        // The exiting component will finish its exit
        // animation before entering component is rendered
        // exitBeforeEnter={true}
        // Fires when all exiting nodes have completed animating out
        onExitComplete={() => null}
      >
        {modalOpen && <Modal handleClose={close}>adadasd</Modal>}
      </AnimatePresence>
    </div>
  );
};

export default ModalSection;
