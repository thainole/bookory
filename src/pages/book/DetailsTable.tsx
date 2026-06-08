import type { Book } from "../../types";
import { RatingStars } from "../../shared";

const DetailsTable = ({ book }: { book: Book }) => {
  const details = [
    ["Autor", book.author],
    ["Género", book.genre],
    ["Año de publicación", book.publication_year],
    ["Editorial", book.publisher],
    ["Idioma", book.language],
    ["Páginas", book.pages],
    [
      "Calificación",
      <div className="flex items-center">
        <span className="mr-1.5">{book.rating}</span>
        <RatingStars bookRating={book.rating} />
      </div>,
    ],
    ["Reseñas", book.total_reviews],
  ];

  return (
    <table className="w-full border-collapse">
      <tbody>
        {details.map(([label, value], index) => (
          <tr key={index} className="border-b border-border last:border-b-0">
            <th className="py-3.5 pr-4 text-left font-semibold text-[13px] w-1/3">
              {label}
            </th>
            <td className="py-3.5 text-[13px]">{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DetailsTable;
