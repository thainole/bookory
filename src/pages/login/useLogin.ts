import { useMutation } from "@tanstack/react-query";
import { login } from "../../services";
import type { LoginUser } from "../../types";

export const useLogin = () => {
  return useMutation({
    mutationFn: (credentials: LoginUser) => login(credentials),
  });
};
