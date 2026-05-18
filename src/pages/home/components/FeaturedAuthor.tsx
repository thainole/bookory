import {
  BookCard,
  Button,
  Container,
  ErrorSection,
  LoadingSection,
} from "../../../common";
import { useBooks } from "../../../hooks";

const FeaturedAuthor = () => {
  const { data, loading, error, hasData } = useBooks(2);

  if (error) return <ErrorSection error={error} />;

  return (
    <section className="py-20">
      <Container>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7.5">
          <div className="grid-cols-1 place-items-center text-center sm:text-right sm:place-items-end">
            <p className="text-primary uppercase text-sm mb-5">
              Autor destacado
            </p>

            <h2 className="mb-6 lg:text-5xl">Javier Marías</h2>

            <p className="text-text text-sm mb-6 leading-relaxed whitespace-pre-line">
              Javier Marías fue uno de los escritores españoles más influyentes
              de la literatura contemporánea. Su obra destaca por su estilo
              introspectivo, sus narradores reflexivos y su exploración de temas
              como la memoria, el amor, el secreto y la traición. Sus novelas
              han sido traducidas a decenas de idiomas y han recibido
              reconocimiento internacional.\n\nA lo largo de su trayectoria,
              desarrolló una voz única caracterizada por frases extensas,
              digresiones profundas y una constante indagación en la condición
              humana. Además de novelista, fue traductor y ensayista, lo que
              enriqueció aún más su estilo literario. Obras como Corazón tan
              blanco y Los enamoramientos lo consolidaron como una figura clave
              de la narrativa en lengua española.
            </p>

            <Button>Ver más</Button>
          </div>

          <div className="grid-cols-1 grid place-items-center sm:inline-block">
            <img src="/images/javier-marias.jpg" />
          </div>

          {loading ? (
            <LoadingSection />
          ) : hasData ? (
            <div className="grid grid-cols-2 place-items-center sm:grid-cols-4 sm:place-items-stretch lg:grid-cols-2 sm:col-span-2 lg:col-span-1 gap-7.5">
              {data.slice(0, 4).map((book) => (
                <BookCard
                  book={book}
                  key={`author-${book.id}`}
                  imgStyle={{ paddingTop: 0 }}
                  className="max-w-40"
                />
              ))}
            </div>
          ) : (
            <p>
              No tenemos libros de este autor, ¡pero pronto traeremos novedades!
            </p>
          )}
        </div>
      </Container>
    </section>
  );
};

export default FeaturedAuthor;
