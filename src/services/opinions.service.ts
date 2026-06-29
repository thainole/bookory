import { CONFIG } from "../config";
import type { OpinionForm, OpinionToUpdate } from "../types";

export const getOpinions = async (signal?: AbortSignal) => {
  const res = await fetch(`${CONFIG.API_URL}/getOpinions.php`, { signal });

  if (!res.ok) throw new Error("Error al obtener opiniones");

  return res.json();
};

export const getOpinion = async (id: number, signal?: AbortSignal) => {
  const res = await fetch(`http://localhost/backend/getOpinion.php?id=${id}`, {
    signal,
  });

  if (!res.ok) throw new Error("Error al obtener opinión");

  return res.json();
};

export const createOpinion = async (data: OpinionForm) => {
  const res = await fetch(`${CONFIG.API_URL}/createOpinion.php`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  return res.json();
};

export const updateOpinion = async (data: OpinionToUpdate) => {
  const res = await fetch(`${CONFIG.API_URL}/updateOpinion.php`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  return res.json();
};

export const deleteOpinion = async (id: number) => {
  const res = await fetch(`${CONFIG.API_URL}/deleteOpinion.php`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ opinion_id: id }),
  });

  return res.json();
};
