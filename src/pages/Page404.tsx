import { Link } from "react-router-dom";
import { Icon } from "../shared/components";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Page404 = () => {
  return (
    <section className="error-404">
      <div className="max-w-7xl mx-auto px-3 pb-30">
        <div className="page-content flex flex-col items-center justify-center gap-7.5 pt-64">
          <h1 className="text-primary">404</h1>
          <h2>¡Vaya! La página no fue encontrada</h2>
          <p className="max-w-2xl mb-5">
            Parece que no se ha encontrado nada en esta dirección. Puedes volver
            a la página anterior o ir a la página de inicio.
          </p>
          <Link
            to="/"
            className="flex self-center cursor-pointer bg-primary text-white text-sm px-5 sm:px-7.5 py-3 rounded-full hover:bg-primary-hover transition capitalize font-semibold"
          >
            Volver al Inicio
            <span className="hidden sm:inline-block">
              <Icon icon={faChevronRight} className="ml-1 text-xs text-white" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Page404;
