import { useQuery } from "@tanstack/react-query";
import { getOpinion } from "../../services";

export const useOpinion = (id?: number) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["opinion", id],
    queryFn: ({ signal }) => getOpinion(id!, signal),
    enabled: !!id,
  });

  return {
    data,
    loading: isLoading,
    error: error ? error.message : null,
  };
};
