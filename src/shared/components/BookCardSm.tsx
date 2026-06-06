import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import Icon from "./Icon";
import { SERVICE_URL } from "../../utils/constants";
import type { Book } from "../../types";

const BookCardSm = ({ book }: { book: Book }) => {
  return (
    <div className="flex h-full gap-x-3 sm:gap-x-5 md:gap-x-7.5">
      <div className="w-20">
        <img
          src={`${SERVICE_URL}/${book.image}`}
          alt={book.title}
          className="rounded-lg lg:rounded-xl hover:cursor-pointer w-20"
          title={book.title}
        />
      </div>

      <div className="content flex flex-col flex-1 truncate justify-between">
        <h3
          title={book.title}
          className="font-semibold truncate hover:text-primary hover:cursor-pointer transition"
        >
          {book.title}
        </h3>
        <p className="text-lighter text-xs hover:cursor-pointer truncate hover:text-primary">
          {book.author}
        </p>

        <div className="flex flex-row gap-1.5 items-center">
          <div className="flex flex-row gap-px">
            <Icon icon={solidStar} className="text-xs text-star" />
            <Icon icon={solidStar} className="text-xs text-star" />
            <Icon icon={solidStar} className="text-xs text-star" />
            <Icon icon={solidStar} className="text-xs text-star" />
            <Icon icon={faStar} className="text-xs text-border" />
          </div>
          <span className="text-xs font-semibold">{book.total_reviews}</span>
        </div>

        <span className="text-primary text-xl font-semibold">
          ${book.price}
        </span>
      </div>
    </div>
  );
};

export default BookCardSm;
