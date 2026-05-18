import { BookCard, ErrorSection, LoadingSection } from "../../common";
import { useBooks } from "../../hooks";

const Books = ({ authorId }: { authorId: string | number }) => {
  const { data, loading, error, hasData } = useBooks(authorId);

  if (loading) return <LoadingSection />;
  if (error) return <ErrorSection error={error} />;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {hasData ? (
        data.map((book) => (
          <BookCard
            book={book}
            key={book.id}
            imgStyle={{ paddingTop: 0 }}
            className="max-w-40"
          />
        ))
      ) : (
        <p>Por el momento no contamos con libros de este autor.</p>
      )}
    </div>
  );
};

export default Books;
