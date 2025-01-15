import { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose} // Close modal when clicking outside
    >
      <div
        className="bg-white w-full max-w-4xl h-[600px] rounded-lg shadow-lg relative"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
      >
        {/* Close Button & Header */}
        <div className="sticky top-0 bg-white z-10 flex items-center justify-between rounded-lg p-6 border-b border-gray-200 shadow-sm">
          <h2 className="text-3xl font-bold">Full Menu</h2>
          <button onClick={onClose}>
            <span className="mgc_close_circle_fill text-4xl text-yellow-500 drop-shadow-sm cursor-pointer hover:opacity-75" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto h-[calc(100%-6rem)]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
