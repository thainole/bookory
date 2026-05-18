import { useEffect, useState } from "react";
import { SERVICE_URL } from "../../utils/constants";
import type { BookService } from "../../types";
import { Container, LoadingSection } from "../common";

const ThaiFavoriteReads = () => {
  const [books, setBooks] = useState<BookService[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    const fetchBooks = async () => {
      try {
        const res = await fetch(`${SERVICE_URL}/books.php`);
        const data = await res.json();

        if (mounted) setBooks(data);
      } finally {
        if (mounted) setLoading(false);
      }
    };

    fetchBooks();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <section className="mt-20">
      <Container className="py-12 bg-[#fcf6f1]">
        <h2 className="mb-4 text-center">La selección de Thais*</h2>
        <p className="mb-12 text-center">
          Puedes encontrarlos en la tienda física o virtual, ¡corre a por ellos!
        </p>
        <div className="w-full overflow-x-auto">
          {loading && <LoadingSection />}
          {books.length > 0 && !loading && (
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
                  {books.map((book) => (
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
          )}
        </div>
      </Container>
    </section>
  );
};

export default ThaiFavoriteReads;
