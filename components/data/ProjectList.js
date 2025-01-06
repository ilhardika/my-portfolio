import Image1 from "~/project1.svg";
import Image2 from "~/project2.png";
import Image3 from "~/project3.png";
import Image4 from "~/project4.png";
import Image5 from "~/project5.png";

export const ProjectList = [
  {
    id: 1,
    image: Image1,
    title: "Tech Landing Page",
    desc: "A responsive landing page developed with Tailwind CSS during a web development bootcamp, featuring a modern design, modular class structure, and based on a Figma prototype.",
    tech: ["HTML", "Tailwind"],
    link: "https://nextcent-kappa.vercel.app/",
  },
  {
    id: 2,
    image: Image4,
    title: "Reqres User List",
    desc: "A secure user management system with responsive design for any device, featuring dynamic data fetching for real-time updates, enhancing security, and improving user experience.",
    tech: ["HTML", "Tailwind", "React"],
    link: "https://reqres-users.vercel.app/",
  },
  {
    id: 3,
    image: Image2,
    title: "Blog",
    desc: "Converted a Figma design into a responsive web application using Tailwind CSS, featuring a pixel-perfect design, mobile hamburger menu, and key learnings in Tailwind CSS and responsive design.",
    tech: ["HTML", "Tailwind"],
    link: "https://dibimbing-blog.vercel.app/",
  },
  {
    id: 4,
    image: Image5,
    title: "Movie Lists",
    desc: "A CRUD application built with React that allows users to manage a movie list using the TMDb API, featuring new movie additions, shortened descriptions, React Router navigation, and a User Info menu for logged-in users.",
    tech: ["HTML", "Bootstrap", "React"],
    link: "https://movie-lists-project.vercel.app/",
  },
  {
    id: 5,
    image: Image3,
    title: "Cafe Landing Page",
    desc: "A CRUD application built with React that allows users to manage a movie list using the TMDb API, featuring new movie additions, shortened descriptions, React Router navigation, and a User Info menu for logged-in users.",
    tech: ["HTML", "Tailwind"],
    link: "https://brewspace-cafe.vercel.app/",
  },
];
