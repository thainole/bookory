import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import "./index.css";
import App from "./App.tsx";
import { LoadingSection, ProtectedRoute } from "./shared/components";
import { AuthProvider } from "./context/AuthContext.tsx";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    hydrateFallbackElement: <LoadingSection />,
    children: [
      {
        index: true,
        lazy: async () => {
          return {
            Component: (await import("./pages/home")).default,
          };
        },
      },
      {
        path: "libros",
        lazy: async () => ({
          Component: (await import("./pages/allBooks")).default,
        }),
      },
      {
        path: "libros-por-autor",
        lazy: async () => ({
          Component: (await import("./pages/booksByAuthor")).default,
        }),
      },
      {
        path: "explorar",
        lazy: async () => ({
          Component: (await import("./pages/Explore.tsx")).default,
        }),
      },
      {
        path: "blog",
        lazy: async () => ({
          Component: (await import("./pages/Blog.tsx")).default,
        }),
      },
      {
        path: "contacto",
        lazy: async () => ({
          Component: (await import("./pages/Contact.tsx")).default,
        }),
      },
      {
        path: "login",
        lazy: async () => ({
          Component: (await import("./pages/login")).default,
        }),
      },
      {
        path: "detalle-libro/:bookId",
        lazy: async () => ({
          Component: (await import("./pages/book")).default,
        }),
      },
      {
        path: "*",
        lazy: async () => ({
          Component: (await import("./pages/Page404.tsx")).default,
        }),
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: "opiniones",
            lazy: async () => ({
              Component: (await import("./pages/opinions")).default,
            }),
          },
          {
            path: "carrito",
            lazy: async () => ({
              Component: (await import("./pages/cart")).default,
            }),
          },
          {
            path: "perfil",
            lazy: async () => ({
              Component: (await import("./pages/profile")).default,
            }),
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false}></ReactQueryDevtools>
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>,
);
