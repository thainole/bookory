export const CONFIG = {
  API_URL: import.meta.env.VITE_API_BASE_URL,
  ENV: import.meta.env.VITE_ENVIRONMENT,
  ENDPOINTS: {
    AUTHORS: "/authors.php",
    BOOKS: "/books.php",
    FEATUREDBOOKS: "/featured-books.php",
    FAVORITEBOOKS: "/favorite-books.php",
    LOGIN: "/login.php",
    REGISTER: "/createUser.php",
    CREATE_OPINION: "/createOpinion.php",
    GET_OPINIONS: "/getOpinions.php",
    UPDATE_OPINION: "/updateOpinion.php",
    DELETE_OPINION: "/deleteOpinion.php",
    GET_PROFILE: "/getProfile.php",
    UPDATE_PROFILE: "/updateProfile.php",
  },
  VERSION: "1.0.0",
} as const;
