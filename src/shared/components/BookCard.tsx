import type { MouseEvent } from "react";
import { Link } from "react-router-dom";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import type { Book } from "../../types";
import { CONFIG } from "../../config";
import RatingStars from "./RatingStars";
import Icon from "./Icon";
import { handleAddToCart } from "../../utils/functions";

const BookCard = ({
  book,
  imgStyle,
  className = "",
}: {
  book: Book;
  imgStyle?: React.CSSProperties;
  className?: string;
}) => {
  const addToCart = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    handleAddToCart(book.id, book.title, book.image, book.price, 1);
  };

  return (
    <div className={`flex flex-col h-full ${className}`}>
      <div className="image-wrapper" style={imgStyle}>
        <Link to={`/detalle-libro/${book.id}`}>
          <figure className="overflow-hidden group relative">
            <img
              src={`${CONFIG.API_URL}/${book.image}`}
              alt={book.title}
              title={book.title}
              className="rounded-xl lg:rounded-2xl group-hover:cursor-pointer"
            />
            <div className="absolute bg-black/10 rounded-xl lg:rounded-2x flex items-start justify-end pr-3 pt-3 inset-0 gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
              <button
                type="button"
                title="Añadir al carrito"
                onClick={addToCart}
                className="flex items-center cursor-pointer justify-center w-10 h-10 rounded-full bg-white text-slate-800 hover:bg-primary hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 shadow-lg focus:ring-2 focus:ring-primary delay-75"
              >
                <Icon icon={faBasketShopping} />
              </button>
            </div>
          </figure>
        </Link>
      </div>

      <div className="content flex flex-col flex-1">
        <Link to={`/detalle-libro/${book.id}`}>
          <h3
            title={book.title}
            className="font-semibold truncate hover:text-primary hover:cursor-pointer transition mb-1.5"
          >
            {book.title}
          </h3>
        </Link>
        <p className="text-lighter text-xs hover:text-primary hover:cursor-pointer mb-2 truncate">
          {book.author}
        </p>

        <div className="flex flex-row gap-1.5 items-center mb-2.5">
          <div className="flex flex-row gap-px">
            <RatingStars bookRating={book.rating} />
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
