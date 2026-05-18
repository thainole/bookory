import { useQuery } from "@tanstack/react-query";
import { fetchAuthors } from "../services";
import type { Author } from "../types";
import { useState } from "react";

export const useAuthors = () => {
  const [selectedAuthor, setSelectedAuthor] = useState<Author>();
  const { data, isLoading, error } = useQuery({
    queryKey: ["authors"],
    queryFn: ({ signal }) => fetchAuthors(signal),
  });

  const authors = Array.isArray(data) ? data : [];
  const hasData = Array.isArray(data) && data.length > 0;
  const selectedAuthorOrFirstItem =
    selectedAuthor || (hasData ? authors[0] : null);

  return {
    data: authors,
    loading: isLoading,
    error: error ? error.message : null,
    hasData,
    selectAuthor: setSelectedAuthor,
    selectedAuthor: selectedAuthorOrFirstItem,
  };
};
