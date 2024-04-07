import { useEffect, useRef } from 'react';

export const useModalCloseListeners = (handleClose: () => void) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose(); // Close modal on ESC key press
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !(modalRef.current as HTMLDivElement).contains(event.target as Node)
      ) {
        handleClose();
      }
    };

    const handlePopstate = () => {
      handleClose(); // Close modal on browser back button click
    };

    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("popstate", handlePopstate)

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("popstate", handlePopstate);
    };
  }, [handleClose, modalRef]);

  return modalRef;
};

