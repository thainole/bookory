import { CONFIG } from "../config";

import type { Book, BooksQueryParams, PaginatedResponse } from "../types";

const API_URL = `${CONFIG.API_URL}${CONFIG.ENDPOINTS.BOOKS}`;

export const fetchPaginatedBooks = async (
  params: BooksQueryParams = {},
  signal?: AbortSignal,
): Promise<PaginatedResponse<Book>> => {
  const url = new URL(API_URL);
  const { page, limit, searchText, sortBy, sortDirection } = params;

  if (page) url.searchParams.append("page", page.toString());
  if (limit) url.searchParams.append("limit", limit.toString());
  if (searchText) url.searchParams.append("search_text", searchText);
  if (sortBy) url.searchParams.append("sort_by", sortBy);
  if (sortDirection) url.searchParams.append("sort_direction", sortDirection);

  const response = await fetch(url.toString(), { signal });
  if (!response.ok) {
    throw new Error(
      `Error al obtener libros: ${response.status} ${response.statusText}`,
    );
  }

  return response.json();
};

export const fetchBooks = async (
  authorId?: number | string,
  signal?: AbortSignal,
): Promise<Book[]> => {
  const url = new URL(API_URL);

  if (authorId) {
    url.searchParams.append("author_id", authorId.toString());
  }

  url.searchParams.append("limit", "60");

  const response = await fetch(url.toString(), { signal });
  if (!response.ok) {
    throw new Error(
      `Error al obtener libros: ${response.status} ${response.statusText}`,
    );
  }

  const json: PaginatedResponse<Book> = await response.json();
  return json.data;
};

export const fetchBookDetail = async (
  bookId?: number | string,
  signal?: AbortSignal,
): Promise<Book[]> => {
  const url = new URL(API_URL);

  if (bookId) {
    url.searchParams.append("book_id", bookId.toString());
  }

  const response = await fetch(url.toString(), { signal });
  if (!response.ok) {
    throw new Error(
      `Error al obtener el libro: ${response.status} ${response.statusText}`,
    );
  }

  const json: PaginatedResponse<Book> = await response.json();
  return json.data;
};
