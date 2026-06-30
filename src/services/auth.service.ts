import { CONFIG } from "../config";

import type { LoginUser, RegisterUser } from "../types";

const API_URL_LOGIN = `${CONFIG.API_URL}${CONFIG.ENDPOINTS.LOGIN}`;
const API_URL_REGISTER = `${CONFIG.API_URL}${CONFIG.ENDPOINTS.REGISTER}`;

export const createUser = async (user: RegisterUser) => {
  const response = await fetch(API_URL_REGISTER, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  if (!response.ok) {
    throw new Error("Error al registrar el usuario.");
  }

  return response.json();
};

export const login = async (credentials: LoginUser) => {
  const response = await fetch(API_URL_LOGIN, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    throw new Error("Error al iniciar sesión.");
  }

  return response.json();
};
