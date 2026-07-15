import type { SortOption } from "../types";

export const RECOMMENDED_SORT_OPTION: SortOption = { label: "Recomendado" };

export const SORT_OPTIONS: SortOption[] = [
  RECOMMENDED_SORT_OPTION,
  { label: "Más recientes", sortBy: "id", sortDirection: "desc" },
  { label: "Título: A-Z", sortBy: "title", sortDirection: "asc" },
  { label: "Título: Z-A", sortBy: "title", sortDirection: "desc" },
  { label: "Precio: menor a mayor", sortBy: "price", sortDirection: "asc" },
  { label: "Precio: mayor a menor", sortBy: "price", sortDirection: "desc" },
  { label: "Mejor calificados", sortBy: "rating", sortDirection: "desc" },
  {
    label: "Año de publicación",
    sortBy: "publication_year",
    sortDirection: "desc",
  },
];
