import type { CartItem } from "../types";

export const handleAddToCart = (
  id: number,
  name: string,
  image: string,
  price: string,
  quantity: number,
) => {
  const updatedPrice = Number(price);
  const cartItem = {
    id,
    name,
    image,
    price: updatedPrice,
    quantity,
  };
  const cart: CartItem[] =
    localStorage.getItem("bookcart") == null
      ? []
      : JSON.parse(localStorage.getItem("bookcart") || "[]");

  const index = cart.findIndex((item) => item.id === cartItem.id);

  if (index === -1) {
    cart.push(cartItem);
  } else {
    cart[index].quantity += quantity;
  }

  localStorage.setItem("bookcart", JSON.stringify(cart));

  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event("updatedCart"));
  }
};

export const formatDate = (date: string) => {
  const d = new Date(date);

  return d.toLocaleString("es-PE", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};
