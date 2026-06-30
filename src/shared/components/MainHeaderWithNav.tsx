import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";

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
import { useAuth } from "../../context/AuthContext";
import avatarImg from "/images/avatar.png";

const LoginIcon = ({
  onClick,
  isAuthenticated,
}: {
  onClick?: () => void;
  isAuthenticated?: boolean;
}) => {
  return !isAuthenticated ? (
    <Link to="/login" className="size-4 sm:size-6" title="Iniciar sesión">
      <Icon
        icon={faUser}
        className="text-black hover:text-primary hover:cursor-pointer transition text-base"
      />
    </Link>
  ) : (
    <button
      className="size-5 sm:size-6 cursor-pointer rounded-full"
      onClick={onClick}
      title="Perfil"
    >
      <img src={avatarImg} alt="imagen de perfil" className="rounded-full" />
    </button>
  );
};

const HeaderIcon = ({
  icon,
  linkTo = undefined,
  iconClass = "text-xs",
  title = "",
}: {
  icon: IconDefinition;
  linkTo?: string;
  iconClass?: string;
  title?: string;
}) => {
  const content = (
    <Icon
      icon={icon}
      className={`text-black hover:text-primary hover:cursor-pointer transition ${iconClass}`}
    />
  );

  return linkTo ? (
    <Link to={linkTo} className="size-4 sm:size-6" title={title}>
      {content}
    </Link>
  ) : (
    <div className="size-4 sm:size-6">{content}</div>
  );
};

const MainHeaderWithNav = () => {
  const navigate = useNavigate();
  const { user, logout, isAuthenticated } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [isUserInfoOpen, setIsUserInfoOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const onToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsUserInfoOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const visibleNavItems = NAV_ITEMS.filter(
    (item) => !item.private || isAuthenticated,
  );

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
            {visibleNavItems.map((item) => (
              <li className="py-8 px-4 xl:py-9 lg:px-7" key={item.id}>
                <NavLink
                  to={item.path}
                  title={item.description}
                  className={({ isActive }) => {
                    return `hover:cursor-pointer transition ${
                      isActive
                        ? "text-primary"
                        : "text-black hover:text-primary"
                    }`;
                  }}
                >
                  {item.name}{" "}
                  <Icon
                    icon={faChevronDown}
                    className="ml-1.5 mb-0.75 text-[8px]"
                  />
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="flex gap-2 md:gap-3.5">
            <HeaderIcon icon={faMagnifyingGlass} iconClass="text-base" />
            <div className="bg-border w-px h-6"></div>
            <div className="relative" ref={menuRef}>
              <LoginIcon
                onClick={() => setIsUserInfoOpen((prev) => !prev)}
                isAuthenticated={isAuthenticated}
              />
              {isUserInfoOpen && (
                <div className="absolute -right-20 sm:-right-4 top-7 w-72 rounded-lg border border-border bg-white shadow-xl z-50 overflow-hidden">
                  <div className="flex gap-3 px-5 py-4 border-b border-border">
                    <img
                      src={avatarImg}
                      alt="imagen de perfil"
                      className="rounded-full size-11"
                    />
                    <div className="">
                      <p className="font-semibold text-black">
                        {user?.full_name}
                      </p>
                      <p className="text-sm text-lighter break-all">
                        {user?.email}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col py-2">
                    <div
                      className="px-5 py-2 hover:text-primary transition cursor-pointer"
                      onClick={() => {
                        setIsUserInfoOpen(false);
                        navigate("/perfil");
                      }}
                    >
                      Mi Perfil
                    </div>
                  </div>

                  <div className="border-t border-border">
                    <button
                      onClick={() => {
                        logout();
                        setIsUserInfoOpen(false);
                        navigate("/login");
                      }}
                      className="w-full cursor-pointer text-left px-5 py-3 hover:text-primary transition"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
            <div className="bg-border w-px h-6"></div>
            <HeaderIcon icon={faHeart} iconClass="text-base" />
            <div className="bg-border w-px h-6"></div>
            <HeaderIcon
              icon={faBasketShopping}
              linkTo="/carrito"
              iconClass="text-base"
              title="Carrito de compras"
            />
          </div>
        </div>
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-border absolute w-full border animate-in slide-in-from-top duration-300">
            <ul className="flex flex-col list-none py-4">
              {visibleNavItems.map((item) => (
                <li key={item.id}>
                  <NavLink
                    to={item.path}
                    title={item.description}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) => {
                      return `block px-7.5 py-3 font-semibold text-sm transition ${
                        isActive
                          ? "text-primary!"
                          : "text-accent hover:text-primary"
                      }`;
                    }}
                  >
                    {item.name}
                    <Icon icon={faChevronRight} className="ml-2" />
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
