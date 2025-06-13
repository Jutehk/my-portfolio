import { motion } from "framer-motion";
import { frontendSkills, testingSkills, softSkills } from "../data/skills";
import { Code, TestTube, Users } from "lucide-react";

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
      className="card p-6 group cursor-pointer bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
    >
      <div className="flex items-center gap-4">
        <div
          className={`p-3 rounded-xl bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-700 dark:to-gray-600 group-hover:from-white group-hover:to-gray-100 dark:group-hover:from-gray-600 dark:group-hover:to-gray-500 transition-all duration-300 ${skill.color}`}
        >
          <skill.icon size={24} />
        </div>
        <span className="font-medium text-gray-800 dark:text-gray-200 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
          {skill.name}
        </span>
      </div>
    </motion.div>
  );

  const SoftSkillBadge = ({
    skill,
    index,
  }: {
    skill: string;
    index: number;
  }) => (
    <motion.div
      variants={skillVariants}
      custom={index}
      whileHover={{ scale: 1.05 }}
      className="px-4 py-2 bg-gradient-to-r from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 hover:from-primary-200 hover:to-secondary-200 dark:hover:from-primary-800/40 dark:hover:to-secondary-800/40 transition-all duration-300 cursor-default"
    >
      {skill}
    </motion.div>
  );

  return (
    <section
      id="skills"
      className="section-padding bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900"
    >
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
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
              My <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A comprehensive skill set spanning frontend development and
              software testing, backed by strong mathematical foundations and
              continuous learning.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full mx-auto" />
          </motion.div>

          {/* Frontend Development Skills */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="flex items-center gap-3 justify-center">
              <Code
                className="text-primary-600 dark:text-primary-400"
                size={28}
              />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Frontend Development
              </h3>
            </div>

            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4"
            >
              {frontendSkills.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </motion.div>
          </motion.div>

          {/* Software Testing Skills */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="flex items-center gap-3 justify-center">
              <TestTube
                className="text-secondary-600 dark:text-secondary-400"
                size={28}
              />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Software Testing
              </h3>
            </div>

            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4"
            >
              {testingSkills.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </motion.div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="flex items-center gap-3 justify-center">
              <Users
                className="text-accent-600 dark:text-accent-400"
                size={28}
              />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Soft Skills
              </h3>
            </div>

            <motion.div
              variants={containerVariants}
              className="flex flex-wrap justify-center gap-3"
            >
              {softSkills.map((skill, index) => (
                <SoftSkillBadge key={skill} skill={skill} index={index} />
              ))}
            </motion.div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="text-center bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-2xl p-8 border border-primary-200 dark:border-primary-800"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Ready to bring these skills to your team?
            </h3>
            <motion.a
              href="#contact"
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Work Together
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
