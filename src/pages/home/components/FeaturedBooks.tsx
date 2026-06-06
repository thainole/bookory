import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import {
  BookCard,
  Container,
  ErrorSection,
  LoadingSection,
} from "../../../shared/components";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useFeaturedBooks } from "../useFeaturedBooks";

const FeaturedBooks = () => {
  const { data, loading, error, hasData } = useFeaturedBooks();

  if (error) return <ErrorSection error={error} />;

  return (
    <section>
      <Container className="pt-17.5 pb-8 bg-[#FFF8F2]">
        <h2 className="mb-16 text-center">Libros destacados</h2>
        {loading ? (
          <LoadingSection />
        ) : hasData ? (
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
            {data.map((item, index) => (
              <SwiperSlide key={`books-${item.id}-${index}`}>
                <BookCard book={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <p>No tenemos libros destacados para ti en este momento</p>
        )}
      </Container>
    </section>
  );
};

export default FeaturedBooks;
