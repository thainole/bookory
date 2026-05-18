import { CONFIG } from "../config";

import type { Book } from "../types";

const API_URL = `${CONFIG.API_URL}${CONFIG.ENDPOINTS.BOOKS}`;

export const fetchBooks = async (
  authorId?: number | string,
  signal?: AbortSignal,
): Promise<Book[]> => {
  const url = new URL(API_URL);

  if (authorId) {
    url.searchParams.append("author_id", authorId.toString());
  }

  const response = await fetch(url.toString(), { signal });
  if (!response.ok) {
    throw new Error(
      `Error al obtener libros: ${response.status} ${response.statusText}`,
    );
  }

  return response.json();
};
