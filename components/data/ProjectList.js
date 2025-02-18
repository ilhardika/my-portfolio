import coverLP from "~/cover-lp-tech.svg";
import coverBlog from "~/cover-blog.png";
import coverMovie from "~/cover-movie-list.png";
import coverTravapp from "~/cover-travapp.png";

export const ProjectList = [
  {
    id: 4,
    image: coverTravapp,
    title: "Travel App",
    desc: "A modern travel booking platform built with React and Vite, designed to provide users with a seamless experience for discovering and booking travel activities.",
    tech: ["HTML", "Tailwind", "React"],
    link: "https://travapp.vercel.app/",
    github: "https://github.com/ilhardika/travel-web-app",
  },
  {
    id: 3,
    image: coverMovie,
    title: "Movie Lists",
    desc: "A CRUD application built with React that allows users to manage a movie list using the TMDb API, featuring new movie additions, shortened descriptions, React Router navigation, and a User Info menu for logged-in users.",
    tech: ["HTML", "Bootstrap", "React"],
    link: "https://movie-lists-project.vercel.app/",
    github: "https://github.com/ilhardika/Movie-List",
  },
  {
    id: 1,
    image: coverLP,
    title: "Tech Landing Page",
    desc: "A responsive landing page developed with Tailwind CSS during a web development bootcamp, featuring a modern design, modular class structure, and based on a Figma prototype.",
    tech: ["HTML", "Tailwind"],
    link: "https://nextcent-kappa.vercel.app/",
    github: "https://github.com/ilhardika/landing-page-tech",
  },
  {
    id: 2,
    image: coverBlog,
    title: "Blog",
    desc: "Converted a Figma design into a responsive web application using Tailwind CSS, featuring a pixel-perfect design, mobile hamburger menu, and key learnings in Tailwind CSS and responsive design.",
    tech: ["HTML", "Tailwind"],
    link: "https://dibimbing-blog.vercel.app/",
    github: "https://github.com/ilhardika/dibimbing-blog",
  },
];
