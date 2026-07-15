import { useEffect, useRef, useState } from "react";
import {
  faArrowDownWideShort,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import Icon from "./Icon";
import type { SortOption } from "../../types";
import { SORT_OPTIONS } from "../../data";

interface Props {
  value?: SortOption;
  onChange: (option: SortOption) => void;
}

const SortDropdown = ({ value, onChange }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option: SortOption) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full max-w-70" ref={menuRef}>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full flex items-center justify-between gap-3 bg-primary text-white rounded-full px-5 py-3.25 cursor-pointer hover:bg-primary-hover transition-colors"
      >
        <span className="flex items-center gap-2 h-6">
          <Icon icon={faArrowDownWideShort} className="text-base text-white" />
          <span className="font-semibold text-sm text-white">
            {value ? value.label : "Ordenar por"}
          </span>
        </span>
        <Icon
          icon={faChevronUp}
          className={`text-sm transition ${isOpen ? "" : "rotate-180"}`}
        />
      </button>

      {isOpen && (
        <div className="absolute z-50 top-full mt-2 w-full bg-white rounded-2xl shadow-xl border border-border overflow-hidden">
          {SORT_OPTIONS.map((option) => (
            <button
              key={`${option.sortBy}-${option.sortDirection}`}
              type="button"
              onClick={() => handleSelect(option)}
              className={`w-full text-left px-5 py-3 text-sm border-b border-border last:border-none hover:bg-[#F5F5F5] cursor-pointer transition-colors ${
                value?.sortBy === option.sortBy &&
                value?.sortDirection === option.sortDirection
                  ? "text-primary font-semibold"
                  : "text-text"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SortDropdown;
