import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getProfile, updateProfile } from "../../services";
import type { Profile } from "../../types/profile.interface";

export const useProfile = (user_id: number) => {
  const queryClient = useQueryClient();

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["profile", user_id],
    queryFn: () => getProfile(user_id),
  });

  const updateMutation = useMutation({
    mutationFn: updateProfile,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["profile", user_id] });
    },
  });

  return {
    data: data as Profile | undefined,
    loading: isLoading,
    error: error ? error.message : null,
    updateMutation,
    refetch,
  };
};
