import { useState } from "react";

interface Props {
  src: string;
  alt: string;
}

const MovingImg = ({ src, alt }: Props) => {
  const [hovered, setHovered] = useState(false);
  const [position, setPosition] = useState({ x: 50, y: 50 });

  return (
    <figure
      className="overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();

        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;

        setPosition({ x, y });
      }}
      onMouseLeave={() => {
        setHovered(false);
        setPosition({ x: 50, y: 50 });
      }}
    >
      <img
        src={src}
        alt={alt}
        className="w-full transition-transform duration-500"
        style={{
          transform: hovered ? "scale(1.5)" : "scale(1)",
          transformOrigin: `${position.x}% ${position.y}%`,
        }}
      />
    </figure>
  );
};

export default MovingImg;
