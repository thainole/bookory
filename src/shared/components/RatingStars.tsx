import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import Icon from "./Icon";

const RatingStars = ({ bookRating }: { bookRating: number }) => {
  const rating = bookRating ?? 0;

  const stars = Array.from({ length: 5 }).map((_, index) => (
    <Icon
      key={index}
      icon={index < Math.round(rating) ? solidStar : faStar}
      className="text-amber-400 text-xs"
    />
  ));

  return stars;
};

export default RatingStars;
