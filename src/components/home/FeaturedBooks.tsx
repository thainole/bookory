import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { featuredBooks } from "../../data";
import { Container, Icon } from "../common";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const FeaturedBooks = () => (
  <section>
    <style>
      {`
        .image-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;

          transition: all 0.4s ease;
          padding-top: 10px;
          padding-bottom: 10px;
        }

        .image-wrapper img {
          max-height: 220px;
          width: auto;
          object-fit: contain;

          transition: all 0.4s ease;
        }

        .swiper-slide-active .image-wrapper {
          padding-top: 0;
          padding-bottom: 20px;
        }

        .swiper-slide-active .image-wrapper img {
          max-height: 260px;
        }
      `}
    </style>
    <Container className="py-17.5 bg-[#FFF8F2]">
      <h2 className="mb-20 text-center">Featured Books</h2>
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
        {featuredBooks.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="book-card flex flex-col h-full">
              <div className="image-wrapper">
                <img
                  src={item.image}
                  alt={item.title}
                  className="rounded-lg hover:cursor-pointer"
                />
              </div>

              <div className="content flex flex-col flex-1">
                <h3 className="font-semibold truncate hover:text-primary hover:cursor-pointer transition">
                  {item.title}
                </h3>
                <p className="text-lighter mb-1 truncate">{item.author}</p>

                <div className="flex flex-row gap-1.5 items-center mb-1">
                  <div className="flex flex-row gap-px">
                    <Icon icon={solidStar} className="text-xs text-star" />
                    <Icon icon={solidStar} className="text-xs text-star" />
                    <Icon icon={solidStar} className="text-xs text-star" />
                    <Icon icon={solidStar} className="text-xs text-star" />
                    <Icon icon={faStar} className="text-xs text-border" />
                  </div>
                  <span className="text-xs font-semibold">
                    {item.totalOpinions}
                  </span>
                </div>

                <span className="text-primary text-xl font-semibold mt-px">
                  ${item.price}
                </span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  </section>
);

export default FeaturedBooks;
