import type { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import {
  FontAwesomeIcon,
  type CSSVariables,
} from "@fortawesome/react-fontawesome";

interface Props {
  icon: IconDefinition;
  className?: string;
  style?: React.CSSProperties & CSSVariables;
}

const Icon = ({ icon, className = "", style }: Props) => (
  <FontAwesomeIcon icon={icon} className={className} style={style} />
);

export default Icon;
