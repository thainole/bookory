import { useState, type MouseEvent } from "react";
import { Link } from "react-router-dom";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import type { Book } from "../../types";
import { CONFIG } from "../../config";
import RatingStars from "./RatingStars";
import Icon from "./Icon";
import { handleAddToCart } from "../../utils/functions";
import Toast from "./Toast";

const BookCardSm = ({ book }: { book: Book }) => {
  const [toast, setToast] = useState("");

  const addToCart = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    handleAddToCart(book.id, book.title, book.image, book.price, 1);

    setToast(`"${book.title}" fue agregado al carrito`);

    setTimeout(() => {
      setToast("");
    }, 2500);
  };

  return (
    <>
      <div className="flex h-full gap-x-3 sm:gap-x-5 md:gap-x-7.5">
        <div className="w-20">
          <Link to={`/detalle-libro/${book.id}`}>
            <figure className="overflow-hidden group relative">
              <img
                src={`${CONFIG.API_URL}/${book.image}`}
                alt={book.title}
                className="rounded-lg lg:rounded-xl hover:cursor-pointer w-20"
                title={book.title}
              />
              <div className="absolute rounded-xl lg:rounded-2x bg-black/10 flex items-start justify-end pr-2 pt-2 inset-0 gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                <button
                  type="button"
                  title="Añadir al carrito"
                  onClick={addToCart}
                  className="flex items-center cursor-pointer justify-center size-7 rounded-full bg-white text-slate-800 hover:bg-primary hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 shadow-lg focus:ring-2 focus:ring-primary delay-75"
                >
                  <Icon icon={faBasketShopping} />
                </button>
              </div>
            </figure>
          </Link>
        </div>

        <div className="content flex flex-col flex-1 truncate justify-between">
          <Link to={`/detalle-libro/${book.id}`}>
            <h3
              title={book.title}
              className="font-semibold truncate hover:text-primary hover:cursor-pointer transition"
            >
              {book.title}
            </h3>
          </Link>
          <p className="text-lighter text-xs hover:cursor-pointer truncate hover:text-primary">
            {book.author}
          </p>

          <div className="flex flex-row gap-1.5 items-center">
            <div className="flex flex-row gap-px">
              <RatingStars bookRating={book.rating} />
            </div>
            <span className="text-xs font-semibold">{book.total_reviews}</span>
          </div>

          <span className="text-primary text-xl font-semibold">
            ${book.price}
          </span>
        </div>
      </div>
      {toast && <Toast message={toast} />}
    </>
  );
};

export default BookCardSm;
