import coverMovie from "~/cover-movie-list.png";
import coverTravapp from "~/cover-travapp.png";
import coverRanduser from "~/cover-rand-user.png";
import coverCompressly from "~/cover-compressly.png";

export const ProjectList = [
  {
    id: 4,
    image: coverTravapp,
    title: "Travel App",
    desc: "A modern travel booking platform built with React and Vite, designed to provide users with a seamless experience for discovering and booking travel activities.",
    tech: ["HTML", "Tailwind", "React.js"],
    link: "https://travapp.vercel.app/",
    github: "https://github.com/ilhardika/travel-web-app",
  },
  {
    id: 3,
    image: coverMovie,
    title: "Movie Lists",
    desc: "A CRUD application built with React that allows users to manage a movie list using the TMDb API, featuring new movie additions, shortened descriptions, React Router navigation, and a User Info menu for logged-in users.",
    tech: ["HTML", "Bootstrap", "React.js"],
    link: "https://movie-lists-project.vercel.app/",
    github: "https://github.com/ilhardika/Movie-List",
  },
  {
    id: 6,
    image: coverCompressly,
    title: "Compressly",
    desc: "A SAAS web application built with React and Vite that allows users to compress images. Built with React, Bootstrap, and Vite. with Image Preview, Compress, Download, and Share features.",
    tech: ["HTML", "Tailwind", "Next.js"],
    link: "https://compressly-web.vercel.app/",
    github: "https://github.com/ilhardika/compressly",
  },
  {
    id: 5,
    image: coverRanduser,
    title: "User List",
    desc: "A modern React application that displays and manages user data from the Random User API. Built with React, Bootstrap, and Vite. with Search, Sort, Filter, View maps & User Detail features.",
    tech: ["HTML", "Tailwind", "React.js"],
    link: "https://rand-users.vercel.app/",
    github: "https://github.com/ilhardika/user-list",
  },
];
