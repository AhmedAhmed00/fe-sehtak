import { useState } from "react";

export default function useFilterModal() {
  const [openFilter, setOpenFilter] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  function onClose() {
    setOpenFilter(false);
  }

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 300);
  };

  return {
    handleClose,
    isClosing,
    setIsClosing,
    openFilter,
    setOpenFilter,
    onClose,
  };
}
