import { favoriteReads } from "../../data";
import { BookCardSm, Button, Container } from "../common";

const FavoriteReads = () => {
  return (
    <section>
      <Container>
        <div className="flex justify-between flex-row items-start sm:items-center mb-5">
          <h2 className="mr-2 md:mr-12">Nuestras lecturas favoritas</h2>
          <div className="hidden sm:inline-flex flex-1 h-px bg-border mr-12"></div>
          <Button>Comprar</Button>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-7.5 items-center">
          {favoriteReads.map((book) => (
            <div
              className="py-3.75 border-b border-border"
              key={`favorite-${book.id}`}
            >
              <BookCardSm book={book} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FavoriteReads;
