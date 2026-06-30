import { createPortal } from "react-dom";
import { CloseButton } from "../../shared";
import type { Book } from "../../types";
import BookDetails from "../../pages/book/BookDetails";
import { CONFIG } from "../../config";

interface Props {
  open: boolean;
  onClose: () => void;
  book: Book;
}

const BookDetailsModal = ({ open, onClose, book }: Props) => {
  if (!open) return null;

  return createPortal(
    <div className="base-modal-wrapper">
      <div className="base-modal p-4 pt-5 md:p-6 md:pt-7 w-90 md:w-185 flex flex-col gap-3">
        <CloseButton onClick={onClose} />
        <div className="flex gap-7">
          <img
            src={`${CONFIG.API_URL}/${book.image}`}
            alt={book.title}
            className="hidden md:flex md:max-w-75"
          />
          <div className="w-full">
            <BookDetails data={book} isSmallView={true} />
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
};

export default BookDetailsModal;
