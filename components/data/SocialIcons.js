import { FaLinkedin, FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { IoLogoWhatsapp } from "react-icons/io";

export const socialList = [
  {
    id: 1,
    name: "linkedin",
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/ilhamhardika/",
    hover: "hover:text-blue-500",
  },
  {
    id: 2,
    name: "github",
    icon: FaGithub,
    link: "https://github.com/ilhardika",
    hover: "hover:text-gray-300",
  },
  {
    id: 3,
    name: "gmail",
    icon: BiLogoGmail,
    link: "mailto:ilhardika67@example.com",
    hover: "hover:text-red-400",
  },
  {
    id: 4,
    name: "whatsapp",
    icon: IoLogoWhatsapp,
    link: "https://wa.me/6282232113122",
    hover: "hover:text-green-500",
  },
];
