import { useQuery } from "@tanstack/react-query";
import { fetchFavoriteBooks } from "../../services";

export const useFavoriteBooks = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["favorite"],
    queryFn: ({ signal }) => fetchFavoriteBooks(signal),
  });

  return {
    data: Array.isArray(data) ? data : [],
    loading: isLoading,
    error: error ? error.message : null,
    hasData: Array.isArray(data) && data.length > 0,
  };
};
