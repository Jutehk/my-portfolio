import { motion } from 'framer-motion';
import { ArrowRight, Code, TestTube, Sparkles } from 'lucide-react';
import ProfileSidebar from './ProfileSidebar';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="home" className="min-h-screen flex items-center section-padding pt-24 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-3 gap-12 items-start"
        >
          {/* Profile Sidebar */}
          <div className="lg:order-1 order-2">
            <ProfileSidebar />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 lg:order-2 order-1 space-y-8">
            <motion.div variants={itemVariants} className="space-y-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 rounded-full text-sm font-medium text-primary-700 dark:text-primary-300"
              >
                <Sparkles className="w-4 h-4 animate-pulse" />
                Available for Internship
              </motion.div>
              
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-gray-900 dark:text-white">
                  Hello, I'm{' '}
                  <span className="gradient-text block">Juliana Ndunge</span>
                </h1>
                
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-xl md:text-2xl text-gray-600 dark:text-gray-300">
                  <motion.div
                    className="flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Code className="text-primary-600 dark:text-primary-400" size={24} />
                    <span>Frontend Developer</span>
                  </motion.div>
                  <span className="hidden sm:block text-gray-400">•</span>
                  <motion.div
                    className="flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                  >
                    <TestTube className="text-secondary-600 dark:text-secondary-400" size={24} />
                    <span>Software Tester</span>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                A passionate Mathematics and Computer Science student graduating from{' '}
                <span className="font-semibold text-primary-600 dark:text-primary-400">Kenyatta University</span> this December,
                and completing Software Testing certification at{' '}
                <span className="font-semibold text-secondary-600 dark:text-secondary-400">PLP Academy</span> this August.
              </p>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I specialize in creating beautiful, responsive web applications and ensuring software quality 
                through comprehensive testing strategies. I'm seeking an internship opportunity to apply my 
                dual expertise in development and testing.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href="#contact"
                className="btn-primary group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Connect
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
              
              <motion.a
                href="#projects"
                className="btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-gray-200 dark:border-gray-700"
            >
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold gradient-text">2025</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Graduate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold gradient-text">10+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold gradient-text">2</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Specializations</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold gradient-text">100%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Dedicated</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;