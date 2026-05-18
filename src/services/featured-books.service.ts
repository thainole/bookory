import { CONFIG } from "../config";

import type { Book } from "../types";

const API_URL = `${CONFIG.API_URL}${CONFIG.ENDPOINTS.FEATUREDBOOKS}`;

export const fetchFeaturedBooks = async (
  signal?: AbortSignal,
): Promise<Book[]> => {
  const url = new URL(API_URL);

  const response = await fetch(url.toString(), { signal });
  if (!response.ok) {
    throw new Error(
      `Error al obtener libros destacados: ${response.status} ${response.statusText}`,
    );
  }

  return response.json();
};
