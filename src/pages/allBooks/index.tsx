import { useState } from "react";
import {
  BookCard,
  Container,
  ErrorSection,
  LoadingSection,
  Pagination,
  SearchBar,
  SortDropdown,
  SubPageHeader,
} from "../../shared/components";
import { usePaginatedBooks } from "../../shared/hooks";
import type { BooksQueryParams, SortOption } from "../../types";
import { RECOMMENDED_SORT_OPTION } from "../../data";

const AllBooks = () => {
  const [params, setParams] = useState<BooksQueryParams>({
    page: 1,
    limit: 10,
  });
  const [sortOption, setSortOption] = useState<SortOption>(
    RECOMMENDED_SORT_OPTION,
  );

  const { books, totalPages, currentPage, loading, error } =
    usePaginatedBooks(params);

  const handleSearch = (searchText: string) =>
    setParams((prev) => ({ ...prev, searchText, page: 1 }));

  const handleSortChange = (option: SortOption) => {
    setSortOption(option);
    setParams((prev) => ({
      ...prev,
      sortBy: option.sortBy,
      sortDirection: option.sortDirection,
      page: 1,
    }));
  };

  const handlePageChange = (page: number) => {
    setParams((prev) => ({ ...prev, page }));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <SubPageHeader title="Libros" />

      {loading ? (
        <LoadingSection />
      ) : error ? (
        <ErrorSection error={error} />
      ) : (
        <>
          <Container className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-7.5">
            <SearchBar
              value={params.searchText ?? ""}
              onSearch={handleSearch}
              placeholder="Buscar por título, autor o género"
            />
            {books.length > 0 && (
              <SortDropdown value={sortOption} onChange={handleSortChange} />
            )}
          </Container>
          {books.length > 0 ? (
            <>
              <Container className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-8 place-items-center my-10">
                {books.map((book) => (
                  <BookCard
                    book={book}
                    key={book.id}
                    className="book-card-lg max-w-40 sm:max-w-53"
                    imgStyle={{ paddingTop: 0 }}
                  />
                ))}
              </Container>
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </>
          ) : (
            <p className="my-10 text-center">
              {params.searchText
                ? "No se encontraron libros para tu búsqueda."
                : "No contamos con libros por el momento. ¡Vuelva pronto!"}
            </p>
          )}
        </>
      )}
    </>
  );
};

export default AllBooks;
