import { CONFIG } from "../config";

import type { Author } from "../types";

const API_URL = `${CONFIG.API_URL}${CONFIG.ENDPOINTS.AUTHORS}`;

export const fetchAuthors = async (signal?: AbortSignal): Promise<Author[]> => {
  const url = new URL(API_URL);

  const response = await fetch(url.toString(), { signal });
  if (!response.ok) {
    throw new Error(
      `Error al obtener autores: ${response.status} ${response.statusText}`,
    );
  }

  return response.json();
};
