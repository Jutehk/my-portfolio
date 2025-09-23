import { motion } from "framer-motion";
import { ExternalLink, ArrowRight, TestTube , Bug } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const qaProjects = [
    {
      title: "E-commerce Testing Suite",
      description: "Comprehensive testing project for an e-commerce platform including functional, usability, and performance testing with automated test cases.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      demo: "https://ecommercefilterapp.netlify.app/",
      link: "https://github.com/Jutehk/ecommerce--App.git",
      type: "Automation Testing",
      icon: TestTube,
      technologies: ["Jest", "Cypress", "React Testing Library"]
    },
    {
      title: "API Testing Framework",
      description: "Built a comprehensive API testing framework with automated test suites for REST endpoints, data validation, and performance monitoring.",
      image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      demo: "https://climet.netlify.app/",
      link: "https://github.com/Jutehk/weather-a.git",
      type: "API Testing",
      icon: Bug,
      technologies: ["Postman", "JavaScript", "REST API"]
    },
   {
    title: "CleanCity QA Project",
    description: "Led QA efforts as Test Lead for a waste management web application. Coordinated manual and automation testing, managed defect tracking, and delivered comprehensive test reports ensuring high product quality.",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop", 
    demo: "https://jutehk.github.io/CleanCity/",
    link: "https://github.com/Jutehk/CleanCity.git",
    type: "Comprehensive QA",
    icon: TestTube,
    technologies: ["Jest", "Selenium", "Lighthouse", "JIRA"]
  },
    {
      title: "Mobile App Testing",
      description: "Manual and automated testing of mobile applications focusing on usability, performance, and cross-device compatibility.",
      image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      demo: "https://dashvisualize.netlify.app/",
      link: "https://github.com/Jutehk/dashboard-with-data-visualization.git",
      type: "Mobile Testing",
      icon: TestTube,
      technologies: ["Selenium", "Cross-browser Testing", "Responsive Design"]
    },
    {
      title: "Performance Testing Suite",
      description: "Developed performance testing strategies and executed load testing for web applications to ensure optimal user experience.",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      demo: "https://buynes.netlify.app/",
      link: "https://github.com/Jutehk/project.git",
      type: "Performance Testing",
      icon: Bug,
      technologies: ["Load Testing", "Performance Monitoring", "Analytics"]
    },
  ];

  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-16"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              QA <span className="text-blue-600">Projects</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              A showcase of my quality assurance projects demonstrating expertise in 
              manual testing, test automation, and comprehensive QA processes.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full mx-auto" />
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {qaProjects.map((project) => (
              <motion.div
                key={project.title}
                variants={cardVariants}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 },
                }}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Project Type Badge */}
                  <div className="absolute top-4 left-4">
                    <div className="flex items-center gap-2 px-3 py-1 bg-white/90 rounded-full text-xs font-medium text-gray-700">
                      <project.icon size={14} className="text-blue-600" />
                      {project.type}
                    </div>
                  </div>

                  {/* Overlay buttons */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    {project.demo !== "#" && (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/90 rounded-full text-gray-800 hover:bg-white transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink size={20} />
                      </motion.a>
                    )}
                    {project.link !== "#" && (
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/90 rounded-full text-gray-800 hover:bg-white transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaGithub size={20} />
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-4 lg:p-6 space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-blue-50 text-blue-700 text-xs lg:text-sm rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex items-center gap-3 lg:gap-4 pt-4 border-t border-gray-100">
                    {project.demo !== "#" && (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 lg:gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors text-xs lg:text-sm"
                        whileHover={{ x: 5 }}
                      >
                        <ExternalLink size={16} />
                        View Project
                      </motion.a>
                    )}

                    {project.link !== "#" && (
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 lg:gap-2 text-gray-600 hover:text-gray-800 font-medium transition-colors text-xs lg:text-sm"
                        whileHover={{ x: 5 }}
                      >
                        <FaGithub size={16} />
                        Code
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center">
            <motion.a
              href="https://github.com/Jutehk"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Projects
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;