import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { featuredBooks } from "../../data";
import { BookCard, Container } from "../common";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const booksToShow = [...featuredBooks, ...featuredBooks];

const FeaturedBooks = () => (
  <section>
    <Container className="py-17.5 bg-[#FFF8F2]">
      <h2 className="mb-20 text-center">Libros destacados</h2>
      <Swiper
        slidesPerView={5}
        modules={[Autoplay]}
        speed={800}
        centeredSlides={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        breakpoints={{
          0: {
            slidesPerView: 2,
            spaceBetween: 16,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
      >
        {booksToShow.map((item, index) => (
          <SwiperSlide key={`books-${item.id}-${index}`}>
            <BookCard book={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  </section>
);

export default FeaturedBooks;
