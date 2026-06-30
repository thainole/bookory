import { createPortal } from "react-dom";

const Toast = ({ message, error }: { message: string; error?: boolean }) => {
  return createPortal(
    <div
      className={`fixed bottom-5 left-1 sm:left-4 z-9999 ${error ? "bg-[#fbd9d8] text-[#de6764]" : "bg-[#E8F6E1] text-[#48832d]"}  py-2 px-2 sm:px-6 sm:py-4 rounded-xl shadow-lg`}
    >
      {message}
    </div>,
    document.body,
  );
};

export default Toast;
