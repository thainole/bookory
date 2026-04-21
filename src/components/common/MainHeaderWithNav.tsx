import {
  faFacebook,
  faInstagram,
  faPinterest,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Icon from "./Icon";
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faBarsStaggered,
  faBasketShopping,
  faChevronDown,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/images/logo-1.svg";

const HeaderIcon = ({ icon, iconClass = "text-xs" }: any) => {
  return (
    <div className="size-6">
      <Icon
        icon={icon}
        className={"text-black hover:text-primary transition " + iconClass}
      ></Icon>
    </div>
  );
};

const NavItem = ({ name, showArrowDown = true }: any) => {
  return (
    <li className="py-9 px-5">
      <a href="#" className="text-black hover:text-primary transition">
        {name}{" "}
        {showArrowDown && (
          <Icon icon={faChevronDown} className="ml-1.5 mb-0.75 text-[8px]" />
        )}
      </a>
    </li>
  );
};

const MainHeaderWithNav = () => (
  <header className="border-b border-border">
    <div className="text-xs border-b border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-7.5 py-2.5 flex justify-between">
        <div className="flex flex-1 flex-row gap-8 font-bold ">
          <span className="underline text-black hover:text-primary-hover">
            Find a Book Store
          </span>
          <span className="text-black">+1 840 - 841 25 69</span>
        </div>
        <div className="flex flex-row flex-1 gap-3.5 justify-end">
          <HeaderIcon icon={faFacebook} />
          <HeaderIcon icon={faTwitter} />
          <HeaderIcon icon={faInstagram} />
          <HeaderIcon icon={faPinterest} />
        </div>
      </div>
    </div>

    <nav className="h-22.5 lg:h-auto max-w-7xl mx-auto px-4 md:px-7.5 flex items-center justify-between">
      <div className="flex items-center gap-3.5 md:gap-6">
        <button className="group border-none bg-transparent size-6 flex items-center justify-center lg:hidden cursor-pointer">
          <Icon
            icon={faBarsStaggered}
            className="size-4.5 group-hover:text-primary transition"
          />
        </button>

        <img src={logo} alt="logo" />
      </div>

      <ul className="font-semibold hidden lg:flex">
        <NavItem name="Home" />
        <NavItem name="Shop" />
        <NavItem name="Vendor" />
        <NavItem name="Pages" />
        <NavItem name="Blog" />
        <NavItem name="Contact" showArrowDown={false} />
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
    </nav>
  </header>
);

export default MainHeaderWithNav;
