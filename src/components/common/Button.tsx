import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Icon from "./Icon";

const Button = ({ children }: { children: React.ReactNode }) => (
  <button className="flex self-center cursor-pointer bg-primary text-white text-sm px-5 sm:px-7.5 py-3 rounded-full hover:bg-primary-hover transition capitalize font-semibold">
    {children}
    <span className="hidden sm:inline-block">
      <Icon icon={faChevronRight} className="ml-1 text-xs text-white" />
    </span>
  </button>
);

export default Button;
