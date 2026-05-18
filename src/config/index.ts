export const CONFIG = {
  API_URL: import.meta.env.VITE_API_BASE_URL,
  ENV: import.meta.env.VITE_ENVIRONMENT,
  ENDPOINTS: {
    AUTHORS: "/authors.php",
    BOOKS: "/books.php",
    FEATUREDBOOKS: "/featured-books.php",
    FAVORITEBOOKS: "/favorite-books.php",
  },
  VERSION: "1.0.0",
} as const;
