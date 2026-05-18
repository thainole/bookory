import { Container, ErrorSection, LoadingSection } from "../../common";
import { useAuthors } from "../../hooks";
import Books from "./Books";

const BooksAndAuthors = () => {
  const { data, loading, error, hasData, selectAuthor, selectedAuthor } =
    useAuthors();

  if (loading) return <LoadingSection />;
  if (error) return <ErrorSection error={error} />;

  return (
    <Container className="flex mt-7.5 mb-10 gap-4 sm:gap-7.5">
      <div className="w-full sm:w-1/3 lg:w-1/4">
        <div className="max-w-75 border border-border rounded-2xl">
          <h3 className="pt-6.25 px-4 sm:px-10">Filtrar por autor</h3>
          <hr className="mt-3.75 mb-7.5 border-border" />
          <div className="px-4 sm:px-10 pb-6.25">
            {!hasData ? (
              <div>No se encontraron autores</div>
            ) : (
              <ul className="flex flex-col gap-4">
                {data.map((author) => (
                  <li
                    key={author.id}
                    className={`cursor-pointer hover:text-primary-hover ${author.id === selectedAuthor?.id ? "font-bold" : ""}`}
                    onClick={() => selectAuthor(author)}
                  >
                    {author.name} ({author.total_books})
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
      <section className="w-full sm:w-2/3 lg:w-3/4">
        {!selectedAuthor ? (
          <p>Selecciona una categoría para mostrar los productos</p>
        ) : (
          <>
            <h3 className="pt-6.25 truncate">{selectedAuthor.name}</h3>
            <hr className="border-border mt-3.75 mb-7.5" />
            <Books authorId={selectedAuthor.id}></Books>
          </>
        )}
      </section>
    </Container>
  );
};

export default BooksAndAuthors;
