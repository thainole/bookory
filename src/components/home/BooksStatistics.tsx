import { bookstoreStatistics } from "../../data";
import { Container, Icon } from "../common";

const BooksStatistics = () => (
  <section className="mt-30 mb-20">
    <Container>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
        {bookstoreStatistics.map((item, index) => (
          <div
            key={`statistics-${index}`}
            className="group flex flex-row items-center gap-7.5 border border-border rounded-2xl py-10 px-4"
          >
            <div
              className="rounded-full size-20 flex items-center justify-center group-hover:scale-85 transition"
              style={{ backgroundColor: item.bgColor }}
            >
              <Icon
                icon={item.icon}
                className="text-4xl"
                style={{ color: item.iconColor }}
              />
            </div>
            <div className="flex flex-col text-left flex-1">
              <span className="text-[26px] font-semibold text-black">
                {item.number}
              </span>
              <span className="text-lighter uppercase text-xs">
                {item.description}
              </span>
            </div>
          </div>
        ))}
      </div>
    </Container>
  </section>
);

export default BooksStatistics;
