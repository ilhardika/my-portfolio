import "./style.css";
import NavItems from "@/NavItems";
import SocialIcons from "@/SocialIcons";
import { useState } from "react";
import { BiX } from "react-icons/bi";
import { BiMenu } from "react-icons/bi";
import { navItemsList } from "@/data/NavItems";
import { socialList } from "@/data/SocialIcons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuOpen = () => {
    setIsOpen(!isOpen);
  };

  // LinkedIn dan GitHub
  const filteredSocialList = socialList.filter((item) =>
    ["linkedin", "github"].includes(item.name)
  );

  return (
    <nav className="navbar">
      <a href="#home" className="navbar-logo">
        Ilham Hardika
      </a>

      <ul className="navbar-nav hidden gap-10 md:flex">
        <NavItems navItems={navItemsList} />
      </ul>

      <ul className="navbar-social hidden gap-5 md:flex">
        <SocialIcons socialItems={filteredSocialList} />
      </ul>

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

          <ul className="navbar-social hidden gap-5 md:flex">
            <SocialIcons socialItems={filteredSocialList} />
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
