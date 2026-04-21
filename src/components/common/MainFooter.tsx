import cards from "../../assets/images/footer_img.png";
import logo from "../../assets/images/logo.svg";
import Container from "./Container";

const MainFooter = () => (
  <footer className="bg-[#282828]">
    <Container>
      <div className="py-20 border-b border-white flex flex-col md:flex-row gap-y-10 md:gap-2.5">
        <div className="flex flex-col gap-3.5 md:gap-7.5 pr-7">
          <img src={logo} alt="Bookory" className="w-37.5" />
          <span className="footer-text-sm leading-7.5">
            1418 River Drive, Suite 35 <br />
            Cottonhall, CA 9622
          </span>
          <span className="uppercase underline footer-text-sm text-white">
            show on map
          </span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 flex-1 gap-3 gap-y-6 lg:gap-3 md:pl-4 lg:pl-7 md:border-l md:border-white">
          <div className="col-span-1 lg:col-span-2 flex flex-col gap-3 pr-2">
            <span className="text-white font-semibold">Need Help</span>
            <span className="text-primary text-xl md:text-2xl lg:text-3xl font-semibold">
              +(84) - 1800 - 4635
            </span>
            <div className="flex flex-col mt-1">
              <span className="footer-text-sm">
                Monday – Friday: 9:00-20:00
              </span>
              <span className="footer-text-sm">Saturday: 11:00 – 15:00</span>
            </div>
            <span className="text-white font-light text-[18px] mt-1 break-all">
              contact@example.com
            </span>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-white font-semibold mb-1">Explore</span>
            <span className="footer-text-sm">About us</span>
            <span className="footer-text-sm">Sitemap</span>
            <span className="footer-text-sm">Bookmarks</span>
            <span className="footer-text-sm">Sign in / Join</span>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-white font-semibold mb-1">Our Service</span>
            <span className="footer-text-sm">Help Center</span>
            <span className="footer-text-sm">Returns</span>
            <span className="footer-text-sm">Product Recalls</span>
            <span className="footer-text-sm">Accessibility</span>
            <span className="footer-text-sm">Contact Us</span>
            <span className="footer-text-sm">Store Pickup</span>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-white font-semibold mb-1">Categories</span>
            <span className="footer-text-sm">Action</span>
            <span className="footer-text-sm">Comedy</span>
            <span className="footer-text-sm">Drama</span>
            <span className="footer-text-sm">Horror</span>
            <span className="footer-text-sm">Kids</span>
          </div>
        </div>
      </div>
      <div className="py-11.25 flex flex-col sm:flex-row justify-between gap-y-4">
        <span className="text-white font-light text-sm">
          Copyright © 2026 <span className="text-primary">Bookory</span>. All
          rights reserved.
        </span>
        <img
          src={cards}
          alt="Accepted cards"
          className="max-w-87 sm:self-center"
        />
      </div>
    </Container>
  </footer>
);

export default MainFooter;
