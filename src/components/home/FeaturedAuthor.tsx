import { Container } from "../common";

const FeaturedAuthor = () => {
  return (
    <section className="py-20">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-primary uppercase text-sm mb-2">
              Featured Author
            </p>

            <h2 className="text-4xl font-semibold mb-6">Jessica Munoz</h2>

            <p className="text-lighter mb-6 leading-relaxed">
              Janice Hallett is a British author, screenwriter and journalist,
              best known for her debut thriller.
            </p>

            <button className="bg-primary text-white px-6 py-3 rounded-full hover:bg-primary-hover">
              View Profile
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* <img src="/author-main.jpg" className="col-span-2 rounded-xl" />
            <img src="/book1.jpg" />
            <img src="/book2.jpg" /> */}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FeaturedAuthor;
