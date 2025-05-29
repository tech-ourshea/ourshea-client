import React, { useEffect, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}
const Modal: React.FC<ModalProps> = ({ children, isOpen, onClose }) => {
  const [isClient, setIsClient] = useState<boolean>(false);
  useEffect(() => {
    setIsClient(true);
  });
  if (!isOpen || !isClient) return <></>;
  return createPortal(
    <div className="z-50000 fixed bg-gold-500 w-svw h-full" onClick={onClose}>
      {children}
    </div>,
    document.getElementById("root") as HTMLElement
  );
};

export default Modal;
