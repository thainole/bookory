import {
  faFacebook,
  faInstagram,
  faPinterest,
  faTwitter,
  type IconDefinition,
} from "@fortawesome/free-brands-svg-icons";
import Icon from "./Icon";
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faBarsStaggered,
  faBasketShopping,
  faChevronDown,
  faChevronRight,
  faMagnifyingGlass,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import logo from "/images/logo-1.svg";
import { NAV_ITEMS } from "../../data";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const HeaderIcon = ({
  icon,
  iconClass = "text-xs",
}: {
  icon: IconDefinition;
  iconClass?: string;
}) => {
  return (
    <div className="size-4 sm:size-6">
      <Icon
        icon={icon}
        className={
          "text-black hover:text-primary hover:cursor-pointer transition " +
          iconClass
        }
      ></Icon>
    </div>
  );
};

const MainHeaderWithNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="border-b border-border">
      <div className="text-xs border-b border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-7.5 py-2.5 flex justify-between">
          <div className="flex flex-1 flex-row gap-8 font-bold ">
            <span className="underline text-black hover:text-primary-hover hover:cursor-pointer transition">
              Encontrar una librería
            </span>
            <span className="text-black"> +(01) 713-505</span>
          </div>
          <div className="flex flex-row flex-1 gap-3.5 justify-end">
            <HeaderIcon icon={faFacebook} />
            <HeaderIcon icon={faTwitter} />
            <HeaderIcon icon={faInstagram} />
            <HeaderIcon icon={faPinterest} />
          </div>
        </div>
      </div>

      <nav className="sticky z-50">
        <div className="h-22.5 lg:h-auto max-w-7xl mx-auto px-4 md:px-7.5 flex items-center justify-between">
          <div className="flex items-center gap-3.5 md:gap-6">
            <button
              onClick={onToggleMenu}
              className="group border-none bg-transparent size-6 flex items-center justify-center lg:hidden cursor-pointer"
            >
              <Icon
                icon={isOpen ? faXmark : faBarsStaggered}
                className="size-4.5 group-hover:text-primary transition"
              />
            </button>

            <NavLink to="/">
              <img src={logo} alt="logo" className="hover:cursor-pointer" />
            </NavLink>
          </div>

          <ul className="font-semibold hidden lg:flex">
            {NAV_ITEMS.map((item) => (
              <li className="py-8 px-3 xl:py-9 min-[1150px]:px-5" key={item.id}>
                <NavLink
                  to={item.path}
                  title={item.description}
                  className="text-black hover:text-primary hover:cursor-pointer transition"
                >
                  {item.name}{" "}
                  {!item.hideArrow && (
                    <Icon
                      icon={faChevronDown}
                      className="ml-1.5 mb-0.75 text-[8px]"
                    />
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="flex gap-1 md:gap-3.5">
            <HeaderIcon icon={faMagnifyingGlass} iconClass="text-base" />
            <div className="bg-border w-px h-6"></div>
            <HeaderIcon icon={faUser} iconClass="text-base" />
            <div className="bg-border w-px h-6"></div>
            <HeaderIcon icon={faHeart} iconClass="text-base" />
            <div className="bg-border w-px h-6"></div>
            <HeaderIcon icon={faBasketShopping} iconClass="text-base" />
          </div>
        </div>
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-border absolute w-full border animate-in slide-in-from-top duration-300">
            <ul className="flex flex-col list-none py-4">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <NavLink
                    to={item.path}
                    title={item.description}
                    onClick={() => setIsOpen(false)}
                    className="block px-7.5 py-3 text-accent font-semibold text-sm group hover:text-primary transition"
                  >
                    <span className="mr-2 group-hover:text-primary transition">
                      {item.name}
                    </span>
                    <Icon icon={faChevronRight} />
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default MainHeaderWithNav;
