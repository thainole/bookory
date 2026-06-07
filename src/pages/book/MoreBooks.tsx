import {
  BookCard,
  Container,
  ErrorSection,
  LoadingSection,
} from "../../shared";
import { useRandomBooks } from "./useRandomBooks";

const MoreBooks = ({ excludeId }: { excludeId?: number }) => {
  const { data, loading, error, hasData } = useRandomBooks(excludeId);

  if (loading) return <LoadingSection />;
  if (error) return <ErrorSection error={error} />;

  return (
    <section className="mt-15">
      <div className="flex items-center">
        <h2>Quizás podría gustarte</h2>
        <div className="hidden sm:inline-flex flex-1 h-px bg-border ml-12"></div>
      </div>
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
          <p>
            No contamos con libros recomendados por el momento. ¡Vuelva pronto!
          </p>
        )}
      </Container>
    </section>
  );
};

export default MoreBooks;
