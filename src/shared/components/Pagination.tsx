import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Icon from "./Icon";

interface Props {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({ currentPage, totalPages, onPageChange }: Props) => {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav className="flex items-center justify-center gap-2 my-10">
      <button
        type="button"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="w-9 h-9 flex items-center justify-center rounded-full disabled:opacity-30 hover:bg-[#F5F5F5] cursor-pointer disabled:cursor-not-allowed"
        aria-label="Página anterior"
      >
        <Icon icon={faChevronLeft} className="text-xs" />
      </button>

      {pages.map((page) => (
        <button
          key={page}
          type="button"
          onClick={() => onPageChange(page)}
          className={`w-9 h-9 flex items-center justify-center rounded-full text-sm cursor-pointer ${
            page === currentPage
              ? "bg-primary text-white"
              : "hover:bg-[#F5F5F5]"
          }`}
        >
          {page}
        </button>
      ))}

      <button
        type="button"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="w-9 h-9 flex items-center justify-center rounded-full disabled:opacity-30 hover:bg-[#F5F5F5] cursor-pointer disabled:cursor-not-allowed"
        aria-label="Página siguiente"
      >
        <Icon icon={faChevronRight} className="text-xs" />
      </button>
    </nav>
  );
};

export default Pagination;
