import { Link, useParams } from "react-router-dom";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useBookDetails } from "./useBookDetails";
import { CONFIG } from "../../config";
import { ErrorSection, Icon, LoadingSection, MovingImg } from "../../shared";
import MoreBooks from "./MoreBooks";
import BookDetails from "./BookDetails";

const BookDetailsPage = () => {
  const { bookId } = useParams<{ bookId: string }>();
  const { data, hasData, loading, error } = useBookDetails(bookId);

  if (loading) return <LoadingSection />;
  if (error) return <ErrorSection error={error} />;

  return (
    <div className="max-w-7xl mx-auto px-3 pb-20">
      {hasData && data ? (
        <>
          <div className="flex items-center uppercase gap-4 py-7.5">
            <Link
              to="/"
              className="text-xs text-lighter hover:text-accent cursor-pointer font-semibold"
            >
              Inicio
            </Link>
            <Icon icon={faArrowRight} className="ml-1 text-xs text-lighter" />
            <span className="text-xs text-primary">{data.title}</span>
          </div>
          <section className="flex flex-col md:flex-row gap-7.5">
            <div className="w-full lg:w-3/7 sm:1/2 p-7.5 border-border border rounded-xl h-fit">
              <MovingImg
                src={`${CONFIG.API_URL}/${data.image}`}
                alt={data.title}
              />
            </div>

            <div className="w-full lg:w-4/7 sm:1/2 p-7.5 border-border border rounded-xl h-fit">
              <BookDetails data={data} />
            </div>
          </section>

          <section className="mt-10 p-7.5 border-border border rounded-xl">
            <div className="md:max-w-5xl mx-auto py-1.5">
              <h3 className="text-xl mb-3">Descripción</h3>
              <p className="text-sm font-light text-lighter">
                {data.title}, publicada en {data.publication_year}, es una
                destacada obra de {data.author} dentro del género {data.genre}.
              </p>
              <p className="mt-3 text-sm font-light text-lighter">
                Su narrativa envolvente, la profundidad de sus personajes y su
                estilo único la convierten en una lectura imprescindible para
                quienes disfrutan de la buena literatura.
              </p>
              <p className="mt-3 text-sm font-light text-lighter">
                Descubre por qué esta obra ha cautivado a lectores de distintas
                generaciones y añádela hoy mismo a tu colección.
              </p>
            </div>
          </section>

          <MoreBooks excludeId={Number(data.id)} />
        </>
      ) : (
        <p>No se encontró datos del producto</p>
      )}
    </div>
  );
};
export default BookDetailsPage;
