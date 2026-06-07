import { useQuery } from "@tanstack/react-query";
import { fetchBookDetail } from "../../services";

export const useBookDetails = (bookId?: number | string) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["bookbyid", bookId],
    queryFn: ({ signal }) => fetchBookDetail(bookId, signal),
  });

  return {
    data: Array.isArray(data) ? data[0] : null,
    loading: isLoading,
    error: error ? error.message : null,
    hasData: Array.isArray(data) && data.length > 0,
  };
};
