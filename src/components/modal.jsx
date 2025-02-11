import { useEffect } from "react";
import { RxCross2 } from "react-icons/rx";
import { useClickOutside } from "../hooks/use-click-outside";

export default function Modal({ isOpen, onClose, title, children }) {
  const modalRef = useClickOutside(onClose);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-md">
      <div
        ref={modalRef}
        className="max-w-3xl rounded-lg bg-white p-6 shadow-lg lg:w-1/2"
      >
        <div className="mb-4 flex items-center justify-between">
          <h3>{title}</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-red-500"
          >
            <RxCross2 size={24} className="text-black" />
          </button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}
