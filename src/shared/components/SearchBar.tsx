import { useState } from "react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Icon from "./Icon";

interface Props {
  value: string;
  onSearch: (value: string) => void;
  placeholder?: string;
}

const SearchBar = ({
  value,
  onSearch,
  placeholder = "Buscar libros",
}: Props) => {
  const [text, setText] = useState(value);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(text);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-3 bg-[#F6F6F6] rounded-full px-5 py-3.25 w-full max-w-md"
    >
      <input
        id="search"
        type="text"
        name="Buscador"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={placeholder}
        className="searchbar flex-1 bg-transparent outline-none text-sm"
      />
      <button
        type="submit"
        aria-label="Buscar"
        className="text-black hover:text-primary transition cursor-pointer"
      >
        <Icon icon={faMagnifyingGlass} className="text-base" />
      </button>
    </form>
  );
};

export default SearchBar;
