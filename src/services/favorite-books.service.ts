import { CONFIG } from "../config";

import type { Book } from "../types";

const API_URL = `${CONFIG.API_URL}${CONFIG.ENDPOINTS.FAVORITEBOOKS}`;

export const fetchFavoriteBooks = async (
  signal?: AbortSignal,
): Promise<Book[]> => {
  const url = new URL(API_URL);

  const response = await fetch(url.toString(), { signal });
  if (!response.ok) {
    throw new Error(
      `Error al obtener libros favoritos: ${response.status} ${response.statusText}`,
    );
  }

  return response.json();
};
