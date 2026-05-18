import { Icon } from "../../../common";
import bgBooks from "/images/revslider_decor-1.png";
import books from "/images/pile-of-books.png";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Banner = () => (
  <section className="py-4.5">
    <div className="max-w-7xl mx-auto">
      <div className="bg-[#fcecec] rounded-2xl px-7.5 py-15 grid md:grid-cols-2 items-center gap-3">
        <div className="relative place-self-center">
          <div
            className="bg-contain w-80 lg:w-93.75 bg-center h-68 lg:h-80"
            style={{ backgroundImage: `url(${bgBooks})` }}
          >
            <img src={books} alt="books" className="w-56 lg:w-68 mx-auto" />
          </div>
        </div>

        <div>
          <p className="uppercase text-xs text-lighter mb-5">
            Selección de la librería
          </p>

          <h1 className="lg:hidden">Top 10 de Libros Para Tener Un Gran Año</h1>
          <h1 className="hidden lg:block">
            Top 10 de Libros
            <br /> Para Tener <br /> Un Gran Año
          </h1>

          <button className="group bg-white cursor-pointer font-semibold px-6 py-3 mt-8 rounded-full shadow hover:bg-black hover:text-white transition">
            Comprar{" "}
            <Icon
              icon={faChevronRight}
              className="ml-1.5 text-xs group-hover:text-primary"
            />
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default Banner;
