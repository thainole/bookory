import type { User } from "../types";

const STORAGE_KEY = "currentUser";

export const saveCurrentUser = (user: User) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
};

export const getCurrentUser = (): User | null => {
  const user = localStorage.getItem(STORAGE_KEY);

  if (!user) return null;

  return JSON.parse(user);
};

export const logout = () => {
  localStorage.removeItem(STORAGE_KEY);
};

export const isLoggedIn = () => {
  return localStorage.getItem(STORAGE_KEY) !== null;
};
