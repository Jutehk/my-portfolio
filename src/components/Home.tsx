import { motion } from 'framer-motion';
import './Home.css';
import profile from '../assets/profile.jpg';

const Home = () => {
  return (
    <section id="home" className="home-section">
      <motion.div className="home-text" initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
        <h1>Hello, I'm Juliana </h1>
        <p>
   a front-end developer with a love for clean design, smooth interactions and building user-friendly web experiences.
</p>
<p>
  I turn ideas into responsive, interactive websites using modern tools like React, TypeScript, and Tailwindcss — always learning, always improving.
</p>
<p>
  Let’s bring your vision to life on the web!
</p>
        <a href="src/public/resume.pdf" download className="btn">Download CV</a>
      </motion.div>
      <motion.img src={profile} alt="Profile" className="home-img" initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} />
    </section>
  );
};

export default Home;
