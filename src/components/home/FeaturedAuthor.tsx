import { BookCard, Button, Container } from "../common";
import { featuredAuthor } from "../../data";

const FeaturedAuthor = () => {
  return (
    <section className="py-20">
      <Container>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7.5">
          <div className="grid-cols-1 place-items-center text-center sm:text-right sm:place-items-end">
            <p className="text-primary uppercase text-sm mb-5">
              Autor destacado
            </p>

            <h2 className="mb-6 lg:text-5xl">{featuredAuthor.name}</h2>

            <p className="text-text text-sm mb-6 leading-relaxed whitespace-pre-line">
              {featuredAuthor.description}
            </p>

            <Button>Ver más</Button>
          </div>

          <div className="grid-cols-1 grid place-items-center sm:inline-block">
            <img src={`/images/${featuredAuthor.image}`} />
          </div>

          <div className="grid grid-cols-2 place-items-center sm:grid-cols-4 sm:place-items-stretch lg:grid-cols-2 sm:col-span-2 lg:col-span-1 gap-7.5">
            {featuredAuthor.books.map((book) => (
              <BookCard
                book={book}
                key={`author-${book.id}`}
                imgStyle={{ paddingTop: 0 }}
                className="max-w-40"
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FeaturedAuthor;
