import { useQuery } from "@tanstack/react-query";
import { fetchFeaturedBooks } from "../services";

export const useFeaturedBooks = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["featured"],
    queryFn: ({ signal }) => fetchFeaturedBooks(signal),
  });

  return {
    data: Array.isArray(data) ? data : [],
    loading: isLoading,
    error: error ? error.message : null,
    hasData: Array.isArray(data) && data.length > 0,
  };
};
