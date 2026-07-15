import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { fetchPaginatedBooks } from "../../services";
import type { BooksQueryParams } from "../../types";

export const usePaginatedBooks = (params: BooksQueryParams) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["books", params],
    queryFn: ({ signal }) => fetchPaginatedBooks(params, signal),
    placeholderData: keepPreviousData,
  });

  return {
    books: data?.data ?? [],
    total: data?.pagination.total_records ?? 0,
    totalPages: data?.pagination.total_pages ?? 0,
    currentPage: data?.pagination.current_page ?? params.page ?? 1,
    limit: data?.pagination.limit ?? params.limit ?? 10,
    loading: isLoading,
    error: error ? error.message : null,
  };
};
