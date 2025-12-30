import coverMovie from "~/cover-movie-list.png";
import coverTravapp from "~/cover-travapp.png";
import coverCompressly from "~/cover-compressly.png";
import coverLp from "~/cover-lp.png";
import coverErp from "~/cover-erp.png";

const projects = [
  {
    image: coverTravapp,
    title: "Travel Booking App",
    desc: "A modern travel booking platform built with React and Vite, designed to provide users with a seamless experience for discovering and booking travel activities.",
    tech: ["HTML", "Tailwind", "React.js"],
    link: "https://travapp.vercel.app/",
    github: "https://github.com/ilhardika/travel-web-app",
  },
  {
    image: coverErp,
    title: "Erp (On Going)",
    desc: "a unified ERP and POS solution that streamlines business operations through a single, intuitive dashboard. Built with modern web technologies, it offers role-based access control and comprehensive business management features.",
    tech: ["Tailwind", "Next.js", "NeonDB"],
    link: "https://erpindo.vercel.app/login",
    github: "https://github.com/ilhardika/erpindo",
  },
  {
    image: coverCompressly,
    title: "Compressly",
    desc: "A SAAS web application built with React and Vite that allows users to compress images. Built with React, Bootstrap, and Vite. with Image Preview, Compress, Download, and Share features.",
    tech: ["HTML", "Tailwind", "Next.js"],
    link: "https://compressly-web.vercel.app/",
    github: "https://github.com/ilhardika/compressly",
  },
  {
    image: coverMovie,
    title: "Movie Lists",
    desc: "A CRUD application built with React that allows users to manage a movie list using the TMDb API, featuring new movie additions, shortened descriptions, React Router navigation, and a User Info menu for logged-in users.",
    tech: ["HTML", "Bootstrap", "React.js"],
    link: "https://movie-lists-project.vercel.app/",
    github: "https://github.com/ilhardika/Movie-List",
  },
  {
    image: coverLp,
    title: "Landing Page",
    desc: "A modern React-based web application for creating and managing digital wedding invitations with beautiful themes and customization options.",
    tech: ["HTML", "Tailwind", "React.js"],
    link: "https://momenic.vercel.app/",
    github: "https://github.com/ilhardika/momenic",
  },
];

export const ProjectList = projects.map((project, index) => ({
  ...project,
  id: index + 1,
}));
