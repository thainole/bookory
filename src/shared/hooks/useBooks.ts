import { useQuery } from "@tanstack/react-query";
import { fetchBooks } from "../../services";

export const useBooks = (authorId?: number | string) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["booksbyauthor", authorId],
    queryFn: ({ signal }) => fetchBooks(authorId, signal),
  });

  return {
    data: Array.isArray(data) ? data : [],
    loading: isLoading,
    error: error ? error.message : null,
    hasData: Array.isArray(data) && data.length > 0,
  };
};
