import {
  faChevronRight,
  type IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import Icon from "./Icon";

interface Props {
  text: string;
  icon?: IconDefinition;
  onClick?: () => void;
  showIcon?: boolean;
  isInverse?: boolean;
  type?: "button" | "submit";
}

const Button = ({
  text,
  icon = faChevronRight,
  onClick,
  showIcon = true,
  isInverse = false,
  type = "button",
}: Props) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={isInverse ? "base-button-inverse" : "base-button"}
    >
      {text}
      {showIcon && (
        <span className="hidden sm:inline-block">
          <Icon icon={icon} className="ml-1 text-xs text-white" />
        </span>
      )}
    </button>
  );
};

export default Button;
