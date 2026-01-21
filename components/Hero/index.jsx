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
          <h3 className="hero-subtitle">Quality Assurance</h3>
          <p className="hero-description">
            QA Tester with 2+ years experience in manual & automation testing. Passionate about ensuring quality and continuous learning.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
