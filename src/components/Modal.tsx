import { FC } from "react";
import { FiX } from "react-icons/fi";
import Link from "next/link";

interface ModalProps {
  isOpen: boolean;
  toggleModal: () => void;
}

const Modal: FC<ModalProps> = ({ isOpen, toggleModal }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-20 lg:p-0 p-10">
      <div className="bg-white p-8 rounded shadow-lg relative">
        <button
          onClick={toggleModal}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
        >
          <FiX size={14} />
        </button>
        <h2 className="text-lg font-serif text-slate-500 mb-4">
          Are you set for the Next.js Junior Developer Assessment?
        </h2>
        <div className="flex justify-center space-x-4">
          <Link href="/application-form" legacyBehavior>
            <a className="bg-green-600 text-white p-3 shadow-md rounded font-semibold">
              Yes, I&apos;m sure
            </a>
          </Link>
          <button
            onClick={toggleModal}
            className="bg-red-600 text-white p-3 shadow-md rounded font-semibold"
          >
            No, Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
