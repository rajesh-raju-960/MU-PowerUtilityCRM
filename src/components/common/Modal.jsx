const Modal = ({ children, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-[#121826] p-6 rounded-xl w-[500px] relative">

        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-white"
        >
          ✕
        </button>

        {children}
      </div>
    </div>
  );
};

export default Modal;