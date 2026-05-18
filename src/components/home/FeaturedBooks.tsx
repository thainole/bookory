import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { featuredBooks } from "../../data";
import { BookCard, Container } from "../common";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const FeaturedBooks = () => (
  <section>
    <Container className="pt-17.5 pb-8 bg-[#FFF8F2]">
      <h2 className="mb-16 text-center">Libros destacados</h2>
      <Swiper
        className="featured-books-swiper pb-15.5!"
        slidesPerView={5}
        modules={[Autoplay, Pagination]}
        speed={800}
        centeredSlides={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        pagination={{ clickable: true }}
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
        {featuredBooks.map((item, index) => (
          <SwiperSlide key={`books-${item.id}-${index}`}>
            <BookCard book={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  </section>
);

export default FeaturedBooks;
