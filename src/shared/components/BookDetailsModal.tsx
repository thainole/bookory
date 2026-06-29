import { createPortal } from "react-dom";
import { CloseButton } from "../../shared";
import type { Book } from "../../types";
import BookDetails from "../../pages/book/BookDetails";

interface Props {
  open: boolean;
  onClose: () => void;
  book: Book;
}

const BookDetailsModal = ({ open, onClose, book }: Props) => {
  if (!open) return null;

  return createPortal(
    <div className="base-modal-wrapper">
      <div className="base-modal p-4 pt-5 md:p-6 md:pt-7 w-90 sm:w-120 flex flex-col gap-3">
        <CloseButton onClick={onClose} />
        <BookDetails data={book} isSmallView={true} />
      </div>
    </div>,
    document.body,
  );
};

export default BookDetailsModal;
