import { Link } from "react-router-dom";
import { CONFIG } from "../../config";
import { useCart } from "./useCart";
import { Icon } from "../../shared";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const CartItemsTable = () => {
  const {
    listItems,
    hasListItems,
    emptyCart,
    removeItemFromCart,
    total,
    reduceQty,
    increaseQty,
  } = useCart();

  const baseClassTd = "text-center text-xs sm:text-sm font-light text-text";

  return hasListItems ? (
    <>
      <table
        className="
      table-fixed
      w-full
      [&_th]:px-1.5 [&_th]:py-2
      [&_td]:px-1.5 [&_td]:py-3

      sm:[&_th]:px-4
      sm:[&_td]:px-4

      md:[&_th]:px-5.5
      md:[&_td]:px-5.5

      [&_tr]:border-b
      [&_tr]:border-border
      mb-2
      "
      >
        <colgroup>
          <col className="hidden md:table-column w-24" />
          <col />
          <col className="w-18 sm:w-32" />
          <col className="w-20 sm:w-32 md:w-44" />
          <col className="w-19 sm:w-32" />
          <col className="w-6 sm:w-12 md:w-15" />
        </colgroup>
        <thead>
          <tr className="text-xs uppercase text-text">
            <th className="hidden md:table-cell"></th>
            <th className="text-left">Item</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Subtotal</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {listItems.map((item) => (
            <tr key={item.id}>
              <td className="hidden md:table-cell">
                <img
                  className="w-22.5"
                  alt={item.name}
                  src={`${CONFIG.API_URL}/${item.image}`}
                />
              </td>
              <td className="font-semibold text-sm sm:text-base w-auto max-w-30 md:w-auto truncate md:overflow-visible md:whitespace-normal">
                <Link
                  to={`/detalle-libro/${item.id}`}
                  title={item.name}
                  className="hover:text-primary transition"
                >
                  {item.name}
                </Link>
              </td>
              <td className={baseClassTd}>S/. {item.price.toFixed(2)}</td>
              <td className={baseClassTd}>
                <div className="flex flex-row items-center">
                  <button
                    onClick={() => reduceQty(item.id)}
                    className="rounded-l-xl size-6 sm:size-8 lg:size-12 border border-border cursor-pointer transition hover:text-white hover:bg-primary-hover disabled:text-border disabled:cursor-default disabled:bg-white"
                    disabled={item.quantity === 1}
                  >
                    -
                  </button>
                  <span className="size-6 sm:size-8 lg:size-12 border-t border-b border-border text-center text-text text-xs sm:text-sm pt-1 sm:pt-1.5 lg:pt-3">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => increaseQty(item.id)}
                    className="rounded-r-xl size-6 sm:size-8 lg:size-12 border border-border cursor-pointer transition hover:text-white hover:bg-primary-hover disabled:text-border disabled:cursor-default disabled:bg-white"
                    disabled={item.quantity === 99}
                  >
                    +
                  </button>
                </div>
              </td>
              <td className={baseClassTd}>
                S/. {(item.quantity * item.price).toFixed(2)}
              </td>
              <td className="px-1 sm:px-2 md:px-3">
                <button
                  className="border-none bg-none group cursor-pointer"
                  onClick={() => removeItemFromCart(item.id)}
                >
                  <Icon
                    icon={faTrashCan}
                    className="text-sm text-text group-hover:text-primary"
                  />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex flex-row items-center justify-between mt-8">
        <button
          onClick={emptyCart}
          className="flex self-center cursor-pointer bg-white border-primary-hover border-2 text-black text-sm px-5 sm:px-7 py-2.5 rounded-full hover:bg-primary-hover hover:text-white transition capitalize font-semibold"
        >
          Vaciar carrito
        </button>

        <div className="text-lg">
          Total:
          <span className="text-2xl font-bold ml-1.5">
            S/. {total.toFixed(2)}
          </span>
        </div>
      </div>
    </>
  ) : (
    <p>No hay elementos en el carrito</p>
  );
};

export default CartItemsTable;
