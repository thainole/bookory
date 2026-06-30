import { CONFIG } from "../config";

import type { ProfileUpdate } from "../types/profile.interface";

const API_URL_GET = `${CONFIG.API_URL}${CONFIG.ENDPOINTS.GET_PROFILE}`;
const API_URL_UPDATE = `${CONFIG.API_URL}${CONFIG.ENDPOINTS.UPDATE_PROFILE}`;

export const getProfile = async (user_id: number) => {
  const res = await fetch(API_URL_GET, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ user_id }),
  });

  if (!res.ok) throw new Error("Error al obtener perfil");

  return res.json();
};

export const updateProfile = async (data: ProfileUpdate) => {
  const response = await fetch(API_URL_UPDATE, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(
      `Error al actualizar perfil: ${response.status} ${response.statusText}`,
    );
  }

  return response.json();
};
