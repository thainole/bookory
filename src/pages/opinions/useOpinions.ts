import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getOpinions,
  createOpinion,
  updateOpinion,
  deleteOpinion,
} from "../../services";

export const useOpinions = () => {
  const queryClient = useQueryClient();

  const { data, isLoading, error } = useQuery({
    queryKey: ["opinions"],
    queryFn: ({ signal }) => getOpinions(signal),
  });

  const createMutation = useMutation({
    mutationFn: createOpinion,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["opinions"] });
    },
  });

  const updateMutation = useMutation({
    mutationFn: updateOpinion,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["opinions"] });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: deleteOpinion,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["opinions"] });
    },
  });

  return {
    data: Array.isArray(data) ? data : [],
    loading: isLoading,
    error: error ? error.message : null,

    createMutation,
    updateMutation,
    deleteMutation,
  };
};
