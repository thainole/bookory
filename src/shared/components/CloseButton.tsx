import Icon from "./Icon";
import { faClose } from "@fortawesome/free-solid-svg-icons";

const CloseButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      className="border-none p-1.5 sm:p-2 absolute top-1.5 right-1.5 sm:top-3 sm:right-3 group hover:cursor-pointer"
      onClick={onClick}
    >
      <Icon icon={faClose} className=" transition group-hover:text-primary" />
    </button>
  );
};

export default CloseButton;
