import cards from "/images/footer_img.png";
import logo from "/images/logo.svg";
import Container from "./Container";

const MainFooter = () => (
  <footer className="bg-[#282828]">
    <Container>
      <div className="py-20 border-b border-white flex flex-col md:flex-row gap-y-10 md:gap-2.5">
        <div className="flex flex-col gap-3.5 md:gap-7.5 pr-7">
          <img src={logo} alt="Bookory" className="w-37.5" />
          <span className="footer-text-sm leading-7.5">
            Bolognesi 510,
            <br />
            Miraflores 15074
          </span>
          <span className="uppercase underline footer-text-sm text-white cursor-pointer">
            Ver en mapa
          </span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 flex-1 gap-3 gap-y-6 lg:gap-3 md:pl-4 lg:pl-7 md:border-l md:border-white">
          <div className="col-span-1 lg:col-span-2 flex flex-col gap-3 pr-2">
            <span className="text-white font-semibold">Need Help</span>
            <span className="text-primary text-xl md:text-2xl lg:text-3xl font-semibold">
              +(01) 713-505
            </span>
            <div className="flex flex-col mt-1">
              <span className="footer-text-sm">
                Domingo a Jueves: 10:00-21:00
              </span>
              <span className="footer-text-sm">
                Viernes y Sábados: 10:00 – 22:00
              </span>
            </div>
            <span className="text-white font-light text-base md:text-[18px] mt-1 break-all">
              bookory-libreria@gmail.com
            </span>
          </div>
          <div className="flex flex-col gap-3 group-links">
            <span className="text-white font-semibold mb-1">Explora</span>
            <span className="footer-text-sm">Sobre nosotros</span>
            <span className="footer-text-sm">Mapa del sitio</span>
            <span className="footer-text-sm">Marcadores</span>
            <span className="footer-text-sm">Ingresa/Regístrate</span>
          </div>
          <div className="flex flex-col gap-3 group-links">
            <span className="text-white font-semibold mb-1">
              Nuestros servicios
            </span>
            <span className="footer-text-sm">Centro de ayuda</span>
            <span className="footer-text-sm">Recojo en tienda</span>
            <span className="footer-text-sm">Devoluciones</span>
            <span className="footer-text-sm">Accesibilidad</span>
            <span className="footer-text-sm">Contáctanos</span>
          </div>
          <div className="flex flex-col gap-3 group-links">
            <span className="text-white font-semibold mb-1">Categorías</span>
            <span className="footer-text-sm">Novelas</span>
            <span className="footer-text-sm">Historias</span>
            <span className="footer-text-sm">Literatura</span>
            <span className="footer-text-sm">Biografías</span>
            <span className="footer-text-sm">Ficción</span>
          </div>
        </div>
      </div>
      <div className="py-11.25 flex flex-col sm:flex-row justify-between gap-y-4">
        <span className="text-white font-light text-sm">
          Copyright © 2026 <span className="text-primary">Bookory</span>. Todos
          los derechos reservados
        </span>
        <img
          src={cards}
          alt="Accepted cards"
          className="max-w-87 sm:self-center"
        />
      </div>
    </Container>
  </footer>
);

export default MainFooter;
