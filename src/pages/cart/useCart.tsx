import { useCallback, useEffect, useMemo, useState } from "react";
import type { CartItem } from "../../types";

const getCart = () => {
  if (typeof window !== "undefined") {
    const data = localStorage.getItem("bookcart");

    return data ? JSON.parse(data) : [];
  }
  return [];
};

export const useCart = () => {
  const [listItems, setListItems] = useState<CartItem[]>(getCart());

  const updateCart = useCallback((newCart: CartItem[]) => {
    localStorage.setItem("bookcart", JSON.stringify(newCart));
    setListItems(newCart);
    window.dispatchEvent(new Event("updatedCart"));
  }, []);

  const emptyCart = useCallback(() => updateCart([]), [updateCart]);

  const removeItemFromCart = useCallback(
    (id: number) => {
      updateCart(listItems.filter((item) => item.id !== id));
    },
    [listItems, updateCart],
  );

  useEffect(() => {
    const sync = () => setListItems(getCart());
    window.addEventListener("updatedCart", sync);
    window.addEventListener("storage", sync); // distintas pestañas

    return () => {
      window.removeEventListener("updatedCart", sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  const total = useMemo(
    () => listItems.reduce((acc, item) => acc + item.price * item.quantity, 0),
    [listItems],
  );

  const increaseQty = useCallback(
    (id: number) => {
      updateCart(
        listItems.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity++ } : item,
        ),
      );
    },
    [listItems, updateCart],
  );

  const reduceQty = useCallback(
    (id: number) => {
      updateCart(
        listItems.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity-- } : item,
        ),
      );
    },
    [listItems, updateCart],
  );

  return {
    listItems,
    hasListItems: Array.isArray(listItems) && listItems.length > 0,
    emptyCart,
    updateCart,
    removeItemFromCart,
    total,
    reduceQty,
    increaseQty,
  };
};
