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
          <h3 className="hero-subtitle">Front End Developer</h3>
          <p className="hero-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            consectetur odio rerum, quisquam, ut facilis velit atque eligendi
            veniam,
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
