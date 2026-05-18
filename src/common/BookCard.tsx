import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import Icon from "./Icon";
import type { Book } from "../types";
import { SERVICE_URL } from "../utils/constants";

const BookCard = ({
  book,
  imgStyle,
  className = "",
}: {
  book: Book;
  imgStyle?: React.CSSProperties;
  className?: string;
}) => {
  return (
    <div className={`flex flex-col h-full ${className}`}>
      <div className="image-wrapper" style={imgStyle}>
        <img
          src={`${SERVICE_URL}/${book.image}`}
          alt={book.title}
          title={book.title}
          className="rounded-xl lg:rounded-2xl hover:cursor-pointer"
        />
      </div>

      <div className="content flex flex-col flex-1">
        <h3
          title={book.title}
          className="font-semibold truncate hover:text-primary hover:cursor-pointer transition mb-1.5"
        >
          {book.title}
        </h3>
        <p className="text-lighter text-xs hover:text-primary hover:cursor-pointer mb-2 truncate">
          {book.author}
        </p>

        <div className="flex flex-row gap-1.5 items-center mb-2.5">
          <div className="flex flex-row gap-px">
            <Icon icon={solidStar} className="text-xs text-star" />
            <Icon icon={solidStar} className="text-xs text-star" />
            <Icon icon={solidStar} className="text-xs text-star" />
            <Icon icon={solidStar} className="text-xs text-star" />
            <Icon icon={faStar} className="text-xs text-border" />
          </div>
          <span className="text-xs font-semibold">{book.total_reviews}</span>
        </div>

        <span className="text-primary text-xl font-semibold mt-px">
          ${book.price}
        </span>
      </div>
    </div>
  );
};

export default BookCard;
