import { motion } from "framer-motion";
import { testingSkills, programmingSkills, toolsSkills } from "../data/skills";
import { TestTube, Code, Wrench } from "lucide-react";

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const SkillCard = ({ skill, index }: { skill: any; index: number }) => (
    <motion.div
      variants={skillVariants}
      custom={index}
      whileHover={{
        scale: 1.05,
        y: -5,
        transition: { duration: 0.2 },
      }}
      className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
    >
      <div className="flex items-center gap-4">
        <div className={`p-3 rounded-xl bg-gray-50 ${skill.color}`}>
          <skill.icon size={24} />
        </div>
        <span className="font-medium text-gray-800">
          {skill.name}
        </span>
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="section-padding bg-white">
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
            <h2 className="text-4xl font-bold text-gray-900">
              My <span className="text-blue-600">Skills</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A comprehensive skill set focused on quality assurance, testing methodologies, 
              and the technical tools needed to ensure software excellence.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full mx-auto" />
          </motion.div>

          {/* Testing & QA Skills */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="flex items-center gap-3 justify-center">
              <TestTube className="text-blue-600" size={28} />
              <h3 className="text-2xl font-bold text-gray-900">
                Testing & Quality Assurance
              </h3>
            </div>

            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
            >
              {testingSkills.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </motion.div>
          </motion.div>

          {/* Programming Languages */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="flex items-center gap-3 justify-center">
              <Code className="text-teal-600" size={28} />
              <h3 className="text-2xl font-bold text-gray-900">
                Programming Languages
              </h3>
            </div>

            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4"
            >
              {programmingSkills.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </motion.div>
          </motion.div>

          {/* Tools & Technologies */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="flex items-center gap-3 justify-center">
              <Wrench className="text-green-600" size={28} />
              <h3 className="text-2xl font-bold text-gray-900">
                Tools & Technologies
              </h3>
            </div>

            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
            >
              {toolsSkills.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </motion.div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="text-center bg-gray-50 rounded-2xl p-8 border border-gray-200"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Ready to put these skills to work for your team?
            </h3>
            <motion.a
              href="#contact"
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Discuss Your QA Needs
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;