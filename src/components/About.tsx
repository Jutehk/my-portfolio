import { motion } from 'framer-motion';
import { GraduationCap, Award, Target, Heart } from 'lucide-react';
import aboutImg from '../assets/about.jpg';

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
      color: "text-primary-600",
    },
    {
      icon: Award,
      title: "Software Testing Certification",
      subtitle: "PLP Academy • Aug 2025",
      color: "text-secondary-600",
    },
    {
      icon: Target,
      title: "Seeking Internship",
      subtitle: "Frontend Dev & Testing",
      color: "text-accent-600",
    },
  ];

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Image Section */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary-200 to-secondary-200 rounded-2xl blur-xl opacity-50"
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 2, -2, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              <motion.img
                src={aboutImg}
                alt="About Juliana"
                className="relative w-full max-w-md mx-auto rounded-2xl shadow-2xl border-4 border-white"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Floating elements */}
              <motion.div
                className="absolute -top-6 -right-6 bg-white rounded-xl p-4 shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <Heart className="text-red-500" size={24} />
              </motion.div>
            </div>
          </motion.div>

          {/* Content Section */}
          <div className="space-y-8">
            <motion.div variants={itemVariants} className="space-y-4">
              <h2 className="text-4xl font-bold text-gray-900">
                About <span className="gradient-text">Me</span>
              </h2>
              
              <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full" />
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                I'm a passionate technologist with a unique blend of mathematical precision and 
                creative problem-solving. My journey combines the analytical rigor of{' '}
                <span className="font-semibold text-primary-600">Mathematics and Computer Science</span>{' '}
                with specialized expertise in{' '}
                <span className="font-semibold text-secondary-600">Software Testing</span>.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                I believe in creating digital experiences that are not only visually stunning 
                but also robust and reliable. My dual expertise allows me to build applications 
                from both perspectives - crafting beautiful user interfaces while ensuring 
                they meet the highest quality standards through comprehensive testing.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Currently seeking an internship opportunity where I can contribute my skills 
                in frontend development and software testing while continuing to learn and 
                grow in a dynamic, real-world environment.
              </p>
            </motion.div>

            {/* Achievements Grid */}
            <motion.div variants={itemVariants} className="space-y-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className="card p-6 hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r from-gray-100 to-gray-50 ${achievement.color}`}>
                      <achievement.icon size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{achievement.title}</h3>
                      <p className="text-gray-600 text-sm">{achievement.subtitle}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;