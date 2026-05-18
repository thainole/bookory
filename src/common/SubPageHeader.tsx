import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Icon from "./Icon";
import { Link } from "react-router-dom";

interface Props {
  title: string;
}

const SubPageHeader = ({ title }: Props) => {
  return (
    <section className="bg-[#F0F0F0]">
      <div className="max-w-7xl mx-auto py-5 px-3.75 md:p-7.5 lg:py-0 flex flex-col items-center justify-center lg:flex-row lg:justify-between lg:h-50">
        <h1 className="mb-2.5 lg:mb-0">{title}</h1>
        <div className="flex items-center justify-center uppercase gap-4">
          <Link
            to="/"
            className="text-xs text-lighter hover:text-accent cursor-pointer font-semibold"
          >
            Inicio
          </Link>
          <Icon icon={faArrowRight} className="ml-1 text-xs text-lighter" />
          <span className="text-xs text-primary">{title}</span>
        </div>
      </div>
    </section>
  );
};

export default SubPageHeader;
