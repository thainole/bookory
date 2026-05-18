import { Container } from "../../../common";
import { infoData } from "../../../data";

const Info = () => {
  return (
    <section className="py-16">
      <Container>
        <div className="w-full grid md:grid-cols-2 lg:grid-cols-4 text-center items-baseline gap-y-15">
          {infoData.map((item, index) => (
            <div
              key={`info-${index}`}
              className="flex flex-col items-center px-4"
            >
              <div className="mb-7">
                <img src={item.image} alt={item.title} />
              </div>
              <h3 className="font-semibold text-xl mb-4">{item.title}</h3>
              <p className="text-lighter text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Info;
