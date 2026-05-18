import {
  BookCard,
  Container,
  ErrorSection,
  LoadingSection,
  SubPageHeader,
} from "../../common";
import { useBooks } from "../../hooks";

const AllBooks = () => {
  const { data, loading, error, hasData } = useBooks();

  return (
    <>
      <SubPageHeader title="Libros" />
      {loading ? (
        <LoadingSection />
      ) : error ? (
        <ErrorSection error={error} />
      ) : hasData ? (
        <Container className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-8 place-items-center mt-7.5 mb-10">
          {hasData ? (
            data.map((book) => (
              <BookCard
                book={book}
                key={book.id}
                className="book-card-lg max-w-40 sm:max-w-53"
                imgStyle={{ paddingTop: 0 }}
              />
            ))
          ) : (
            <p>No contamos con libros por el momento. ¡Vuelva pronto!</p>
          )}
        </Container>
      ) : (
        <p className="my-10">
          No contamos con libros por el momento. ¡Vuelva pronto!
        </p>
      )}
    </>
  );
};

export default AllBooks;
