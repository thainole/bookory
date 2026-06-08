import type { Book } from "../../types";
import { Icon } from "../../shared";
import DetailsTable from "./DetailsTable";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import AddToCart from "./AddToCart";

const BookDetails = ({ data }: { data: Book }) => {
  return (
    <>
      <div className="bg-[#82d17533] px-2 py-1 rounded-md text-[#82D175] font-light uppercase text-xs inline">
        En stock
      </div>
      <h1 className="mt-5 mb-2.5 text-4xl leading-12">{data.title}</h1>

      <h3 className="text-primary text-[24px] mb-4 lg:mb-5">
        S/. {data.price}
      </h3>

      <DetailsTable book={data} />

      <div className="mt-5 lg:mt-7.5">
        <span className="text-lighter font-semibold text-xs">Cantidad</span>
        <AddToCart book={data} />
        <button className="mt-5.5 cursor-pointer group">
          <Icon icon={faHeart} className="mr-1 text-xs"></Icon>
          <span className="text-lighter text-xs group-hover:text-black">
            Agregar a la lista de deseos
          </span>
        </button>
      </div>
    </>
  );
};

export default BookDetails;
