import "./style.css";
import NavItems from "@/NavItems";
import { useState } from "react";
import { BiX } from "react-icons/bi";
import { BiMenu } from "react-icons/bi";
import { HiDownload } from "react-icons/hi";
import { navItemsList } from "@/data/NavItems";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <a href="#home" className="navbar-logo">
        Ilham Hardika
      </a>

      <ul className="navbar-nav hidden gap-10 md:flex">
        <NavItems navItems={navItemsList} />
      </ul>

      <a
        href="/components/data/Ilham Hardika Resume.pdf"
        download="Ilham_Hardika_Resume.pdf"
        className="navbar-cv-button hidden md:flex"
      >
        <HiDownload className="w-5 h-5" />
        <span>Get CV</span>
      </a>

      {isOpen ? (
        <BiX className="navbar-menu-icon block md:hidden" onClick={menuOpen} />
      ) : (
        <BiMenu
          className="navbar-menu-icon block md:hidden"
          onClick={menuOpen}
        />
      )}

      {isOpen && (
        <div className={`navbar-mobile-menu ${isOpen ? "block" : "hidden"}`}>
          <ul className="navbar-mobile-nav flex flex-col gap-8">
            <NavItems navItems={navItemsList} />
          </ul>

          <a
            href="/components/data/Ilham Hardika Resume.pdf"
            download="Ilham_Hardika_Resume.pdf"
            className="navbar-cv-button-mobile"
          >
            <HiDownload className="w-5 h-5" />
            <span>Get CV</span>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
