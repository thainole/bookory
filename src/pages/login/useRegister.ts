import { useMutation } from "@tanstack/react-query";
import { createUser } from "../../services";
import type { RegisterUser } from "../../types";

export const useRegister = () => {
  return useMutation({
    mutationFn: (user: RegisterUser) => createUser(user),
  });
};
