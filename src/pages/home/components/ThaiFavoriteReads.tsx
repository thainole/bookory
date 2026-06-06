import { SERVICE_URL } from "../../../utils/constants";
import {
  Container,
  ErrorSection,
  LoadingSection,
} from "../../../shared/components";
import { useBooks } from "../../../shared/hooks";

const ThaiFavoriteReads = () => {
  const { data, loading, error, hasData } = useBooks();

  if (error) return <ErrorSection error={error} />;

  return (
    <section className="mt-20">
      <Container className="py-12 bg-[#fcf6f1]">
        <h2 className="mb-4 text-center">La selección de Thais*</h2>
        <p className="mb-12 text-center">
          Puedes encontrarlos en la tienda física o virtual, ¡corre a por ellos!
        </p>
        <div className="w-full overflow-x-auto">
          {loading ? (
            <LoadingSection />
          ) : hasData ? (
            <>
              <table className="w-full text-sm text-left border-none">
                <thead className=" text-xs uppercase">
                  <tr>
                    <th className="px-3 py-2">Libro</th>
                    <th className="px-3 py-2 hidden sm:table-cell">Autor</th>
                    <th className="px-3 py-2 hidden md:table-cell">Género</th>
                    <th className="px-3 py-2 hidden lg:table-cell">Año</th>
                    <th className="px-3 py-2">Precio</th>
                    <th className="px-3 py-2 hidden md:table-cell">
                      Opiniones
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {data.slice(1, 15).map((book) => (
                    <tr key={book.id} className="border-t">
                      <td className="px-3 py-2 flex items-center gap-3">
                        <img
                          src={`${SERVICE_URL}/${book.image}`}
                          alt={book.title}
                          className="w-12 h-16 object-cover rounded"
                        />
                        <div className="flex flex-col">
                          <span className="font-medium">{book.title}</span>
                          <span className="text-lighter text-xs sm:hidden">
                            {book.author}
                          </span>
                        </div>
                      </td>

                      <td className="px-3 py-2 hidden sm:table-cell">
                        {book.author}
                      </td>

                      <td className="px-3 py-2 hidden md:table-cell">
                        {book.genre}
                      </td>

                      <td className="px-3 py-2 hidden lg:table-cell">
                        {book.publication_year}
                      </td>

                      <td className="px-3 py-2 font-semibold text-primary">
                        ${book.price}
                      </td>

                      <td className="px-3 py-2 hidden md:table-cell text-center">
                        {book.total_reviews}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-xs mt-6">
                *Tabla construida a partir de datos almacenados en una base de
                datos relacional y consultados mediante un servicio web.
              </p>
            </>
          ) : (
            <p>Aún no contamos con libros para esta sección :( </p>
          )}
        </div>
      </Container>
    </section>
  );
};

export default ThaiFavoriteReads;
