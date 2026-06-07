import { useQuery } from "@tanstack/react-query";
import { fetchBooks } from "../../services";

export const useRandomBooks = (excludeId?: number) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["books", excludeId],
    queryFn: ({ signal }) => fetchBooks(undefined, signal),
    select: (books) =>
      books
        .filter((book) => book.id !== excludeId)
        .sort(() => Math.random() - 0.5)
        .slice(0, 6),
  });

  return {
    data: Array.isArray(data) ? data : [],
    loading: isLoading,
    error: error ? error.message : null,
    hasData: !!data?.length,
  };
};
