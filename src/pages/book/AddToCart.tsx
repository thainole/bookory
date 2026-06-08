import { useState } from "react";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { Icon, Toast } from "../../shared";
import type { Book } from "../../types";
import { handleAddToCart } from "../../utils/functions";

const AddToCart = ({ book }: { book: Book }) => {
  const [quantity, setQuantity] = useState(1);
  const [toast, setToast] = useState("");

  const onAddToCart = () => {
    handleAddToCart(book.id, book.title, book.image, book.price, quantity);
    setToast(`"${book.title}" fue agregado al carrito`);

    setTimeout(() => {
      setToast("");
    }, 2500);
  };

  return (
    <div className="flex flex-row items-center gap-2.5">
      <div className="flex flex-row items-center">
        <button
          onClick={() => setQuantity(quantity - 1)}
          className="rounded-l-xl size-12 border border-border cursor-pointer  transition hover:text-white hover:bg-primary-hover disabled:text-border disabled:cursor-default disabled:bg-white"
          disabled={quantity === 1}
        >
          -
        </button>
        <span className="size-12 border-t border-b border-border font-semibold text-center pt-3">
          {quantity}
        </span>
        <button
          onClick={() => setQuantity(quantity + 1)}
          className="rounded-r-xl size-12 border border-border cursor-pointer  transition hover:text-white hover:bg-primary-hover disabled:text-border disabled:cursor-default disabled:bg-white"
          disabled={quantity === 99}
        >
          +
        </button>
      </div>
      <button
        onClick={onAddToCart}
        className="flex self-center cursor-pointer bg-primary text-white text-sm px-5 sm:px-7.5 py-3 rounded-full hover:bg-primary-hover transition font-semibold"
      >
        <span>
          <Icon icon={faBasketShopping} className="mr-1.5 text-sm text-white" />
        </span>
        Agregar{" "}
        <span className="hidden lg:inline-block text-white ml-1">
          al Carrito
        </span>
      </button>
      {toast && <Toast message={toast} />}
    </div>
  );
};

export default AddToCart;
