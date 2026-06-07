import { Link, useParams } from "react-router-dom";
import { faHeart, faStar } from "@fortawesome/free-regular-svg-icons";
import {
  faArrowRight,
  faBasketShopping,
  faStar as solidStar,
} from "@fortawesome/free-solid-svg-icons";
import { useBookDetails } from "./useBookDetails";
import { CONFIG } from "../../config";
import { ErrorSection, Icon, LoadingSection } from "../../shared";
import { useState } from "react";
import {
  faFacebook,
  faLinkedin,
  faPinterest,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import MoreBooks from "./MoreBooks";

const BookDetailsPage = () => {
  const { bookId } = useParams<{ bookId: string }>();
  const { data, hasData, loading, error } = useBookDetails(bookId);

  const [quantity, setQuantity] = useState(1);

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
              <figure className="mb-3 overflow-hidden">
                <img
                  src={`${CONFIG.API_URL}/${data.image}`}
                  alt={data.title}
                  className="group-hover:scale-105 transition-transform duration-500 mx-auto"
                />
              </figure>
            </div>

            <div className="w-full lg:w-4/7 sm:1/2 p-7.5 border-border border rounded-xl h-fit">
              <div className="bg-[#82d17533] px-2 py-1 rounded-md text-[#82D175] font-light uppercase text-xs inline">
                En stock
              </div>
              <h1 className="mt-5 mb-2.5 text-4xl leading-12">{data.title}</h1>
              <div className="flex items-center">
                <span className="pr-2.5 mr-2.5 text-xs border-r border-border">
                  <span className="text-lighter">Autor:</span> {data.author}
                </span>
                <div className="flex items-center gap-1.5">
                  <span>
                    <div className="flex flex-row gap-px">
                      <Icon icon={solidStar} className="text-xs text-star" />
                      <Icon icon={solidStar} className="text-xs text-star" />
                      <Icon icon={solidStar} className="text-xs text-star" />
                      <Icon icon={solidStar} className="text-xs text-star" />
                      <Icon icon={faStar} className="text-xs text-border" />
                    </div>
                  </span>
                  <span className="text-xs font-semibold pt-0.5">
                    {data.total_reviews}
                  </span>
                </div>
              </div>

              <hr />

              <h3 className="text-primary text-[24px] mb-3.5">
                S/. {data.price}
              </h3>
              <p className="text-[14px] font-light">
                Sumérgete en el universo literario de {data.author} a través de
                esta obra imprescindible. Sus personajes, reflexiones y estilo
                narrativo convierten cada página en una experiencia única para
                quienes disfrutan de la buena literatura.
              </p>

              <hr />

              <div>
                <span className="text-lighter font-semibold text-xs">
                  Cantidad
                </span>
                <div className="flex flex-row items-center gap-2.5">
                  <div className="flex flex-row items-center">
                    <button
                      onClick={() => setQuantity(quantity - 1)}
                      className="rounded-l-xl size-12 border border-border cursor-pointer  transition hover:text-white hover:bg-primary-hover disabled:text-border disabled:cursor-default disabled:bg-white"
                      disabled={quantity === 1}
                    >
                      -
                    </button>
                    <span className="size-12 border-t border-b border-border font-semibold text-center pt-3">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="rounded-r-xl size-12 border border-border cursor-pointer  transition hover:text-white hover:bg-primary-hover disabled:text-border disabled:cursor-default disabled:bg-white"
                      disabled={quantity === 9}
                    >
                      +
                    </button>
                  </div>
                  <button className="flex self-center cursor-pointer bg-primary text-white text-sm px-5 sm:px-7.5 py-3 rounded-full hover:bg-primary-hover transition capitalize font-semibold">
                    <span className="hidden sm:inline-block">
                      <Icon
                        icon={faBasketShopping}
                        className="mr-1 text-xs text-white"
                      />
                    </span>
                    Agregar al carrito
                  </button>
                </div>
                <button className="mt-4 cursor-pointer group">
                  <Icon icon={faHeart} className="mr-1 text-sm"></Icon>
                  <span className="text-lighter text-xs group-hover:text-black">
                    Agregar a la lista de deseos
                  </span>
                </button>
              </div>

              <hr />

              <div className="text-[13px]">
                <div className="mb-2">
                  <span className="text-lighter">Género: </span>
                  <span className="text-black">{data.genre}</span>
                </div>
                <div>
                  <span className="text-lighter">Etiquetas: </span>
                  <span className="text-black">libros, {data.genre}</span>
                </div>
              </div>

              <div className="mt-7 mb-3 flex flex-row gap-2">
                <Icon
                  icon={faFacebook}
                  className="text-[#3B5998] text-3xl"
                ></Icon>
                <Icon
                  icon={faTwitter}
                  className="text-[#1DA1F2] text-3xl"
                ></Icon>
                <Icon
                  icon={faLinkedin}
                  className="text-[#0077B5] text-3xl"
                ></Icon>
                <Icon
                  icon={faPinterest}
                  className="text-[#E60023] text-3xl"
                ></Icon>
              </div>
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
