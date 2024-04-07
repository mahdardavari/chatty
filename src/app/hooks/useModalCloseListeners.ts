import { useEffect, useRef } from 'react';

export const useModalCloseListeners = (handleClose :() => void) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (event :KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose(); // Close modal on ESC key press
      }
    };

    const handleClickOutside = (event :MouseEvent) => {
      if (
        modalRef.current &&
        !(modalRef.current as HTMLDivElement).contains(event.target as Node)
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
  }, [handleClose, modalRef]);

  return modalRef;
};

