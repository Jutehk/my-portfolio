import { projects } from '../data/projects';
import { motion } from 'framer-motion';
import './Projects.css';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>
      {/* <p className="projects-intro">
        Here are some of the projects I've built to sharpen my frontend development skills.
        They demonstrate my ability to turn ideas into responsive, functional, and visually appealing web applications.
      </p> */}

      <motion.div
        className="projects-grid"
        
        whileInView="visible"
        viewport={{ once: true, amount: 0.0 }}
      >
        {projects.slice(0, 3).map((project, i) => (
          <motion.div
            className="project-card"
            key={project.title}
            custom={i}
            variants={cardVariants}
          >
            <img src={project.image} alt={project.title} />
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-buttons">
                <a
                  href={project.demo}
                  className="btn small"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <a
        href="https://github.com/Jutehk"
        target="_blank"
        rel="noopener noreferrer"
        className="btn"
      >
        More Projects 
      </a>
    </section>
  );
};

export default Projects;
