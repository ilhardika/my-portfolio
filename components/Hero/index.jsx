import "./style.css";
import Image from "~/hero.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div id="home" className="hero-container">
      <div className="hero-content">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img src={Image} alt="" className="hero-image" />
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-text-container"
        >
          <h1 className="hero-title">Ilham Hardika</h1>
          <h3 className="hero-subtitle">Front-end | Quality Assurance</h3>
          <p className="hero-description">
            QA Tester with 2 years of experience at Allianz, ensuring
            high-quality mobile and web apps. Skilled in Agile testing, JIRA,
            and expanding into frontend development with React and Next.js.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
