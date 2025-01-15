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
                className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full max-h-[80vh] overflow-y-auto relative"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
            >
                <button
                    onClick={onClose}
                    className="text-green-900 hover:text-black absolute top-4 right-4"
                >
                    <span className="mgc_close_circle_fill text-4xl text-yellow-500 drop-shadow-sm cursor-pointer hover:opacity-75" />
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;
