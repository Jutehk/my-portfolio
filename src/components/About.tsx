import { motion } from 'framer-motion';
import { GraduationCap, Award, Target, Heart, Brain, Lightbulb, Users, Clock } from 'lucide-react';

const About = () => {
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

  const achievements = [
    {
      icon: GraduationCap,
      title: "Mathematics & Computer Science",
      subtitle: "Kenyatta University • Dec 2025",
      color: "text-primary-600 dark:text-primary-400",
      bgColor: "bg-primary-100 dark:bg-primary-900/30",
    },
    {
      icon: Award,
      title: "Software Testing Certification",
      subtitle: "PLP Academy • Aug 2025",
      color: "text-secondary-600 dark:text-secondary-400",
      bgColor: "bg-secondary-100 dark:bg-secondary-900/30",
    },
    {
      icon: Target,
      title: "Seeking Internship",
      subtitle: "Frontend Dev & Testing",
      color: "text-accent-600 dark:text-accent-400",
      bgColor: "bg-accent-100 dark:bg-accent-900/30",
    },
  ];

  const softSkills = [
    { icon: Brain, title: "Analytical Thinking", description: "Breaking down complex problems into manageable solutions" },
    { icon: Lightbulb, title: "Creative Problem Solving", description: "Finding innovative approaches to technical challenges" },
    { icon: Users, title: "Team Collaboration", description: "Working effectively in diverse, cross-functional teams" },
    { icon: Clock, title: "Time Management", description: "Balancing multiple projects and meeting tight deadlines" },
    { icon: Heart, title: "Attention to Detail", description: "Ensuring quality and precision in every line of code" },
    { icon: Target, title: "Goal-Oriented", description: "Focused on delivering results and continuous improvement" },
  ];

  return (
    <section id="about" className="section-padding bg-white dark:bg-gray-900">
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-16"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A passionate technologist with a unique blend of mathematical precision and 
              creative problem-solving, ready to make an impact in the tech industry.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full mx-auto" />
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Story Section */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">My Journey</h3>
              
              <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  I'm a passionate technologist with a unique blend of mathematical precision and 
                  creative problem-solving. My journey combines the analytical rigor of{' '}
                  <span className="font-semibold text-primary-600 dark:text-primary-400">Mathematics and Computer Science</span>{' '}
                  with specialized expertise in{' '}
                  <span className="font-semibold text-secondary-600 dark:text-secondary-400">Software Testing</span>.
                </p>
                
                <p>
                  I believe in creating digital experiences that are not only visually stunning 
                  but also robust and reliable. My dual expertise allows me to build applications 
                  from both perspectives - crafting beautiful user interfaces while ensuring 
                  they meet the highest quality standards through comprehensive testing.
                </p>
                
                <p>
                  Currently seeking an internship opportunity where I can contribute my skills 
                  in frontend development and software testing while continuing to learn and 
                  grow in a dynamic, real-world environment.
                </p>
              </div>
            </motion.div>

            {/* Achievements */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Education & Goals</h3>
              
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    className="card p-6 hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
                    whileHover={{ scale: 1.02, y: -2 }}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-xl ${achievement.bgColor}`}>
                        <achievement.icon size={24} className={achievement.color} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">{achievement.title}</h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">{achievement.subtitle}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Soft Skills Section */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Core Strengths</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Beyond technical skills, these personal qualities drive my success
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="card p-6 text-center hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 rounded-xl mb-4">
                    <skill.icon size={24} className="text-primary-600 dark:text-primary-400" />
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{skill.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{skill.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="text-center bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-2xl p-8 border border-primary-200 dark:border-primary-800"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Ready to bring passion and expertise to your team?
            </h3>
            <motion.a
              href="#contact"
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Connect
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;