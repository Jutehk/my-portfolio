import { motion } from 'framer-motion';
import { Download, ArrowRight, Code, TestTube } from 'lucide-react';
import profile from '../assets/profile.jpg';

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
    <section id="home" className="min-h-screen flex items-center section-padding pt-24">
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Text Content */}
          <div className="space-y-8">
            <motion.div variants={itemVariants} className="space-y-4">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-100 to-secondary-100 rounded-full text-sm font-medium text-primary-700"
              >
                <span className="w-2 h-2 bg-accent-500 rounded-full animate-pulse" />
                Available for Internship
              </motion.div>
              
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Hello, I'm{' '}
                <span className="gradient-text">Juliana</span>
              </h1>
              
              <div className="flex items-center gap-4 text-xl md:text-2xl text-gray-600">
                <motion.div
                  className="flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                >
                  <Code className="text-primary-600" size={24} />
                  <span>Frontend Developer</span>
                </motion.div>
                <span className="text-gray-400">•</span>
                <motion.div
                  className="flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                >
                  <TestTube className="text-secondary-600" size={24} />
                  <span>Software Tester</span>
                </motion.div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                A passionate Mathematics and Computer Science student graduating from{' '}
                <span className="font-semibold text-primary-600">Kenyatta University</span> this December,
                and completing Software Testing certification at{' '}
                <span className="font-semibold text-secondary-600">PLP Academy</span> this August.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
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
                href="/resume.pdf"
                download
                className="btn-primary group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={20} />
                Download CV
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
              
              <motion.a
                href="#contact"
                className="btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Connect
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200"
            >
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">2025</div>
                <div className="text-sm text-gray-600">Graduate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">10+</div>
                <div className="text-sm text-gray-600">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">2</div>
                <div className="text-sm text-gray-600">Specializations</div>
              </div>
            </motion.div>
          </div>

          {/* Profile Image */}
          <motion.div
            variants={itemVariants}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full blur-2xl opacity-30"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              
              <motion.img
                src={profile}
                alt="Juliana - Frontend Developer & Software Tester"
                className="relative w-80 h-80 object-cover rounded-full shadow-2xl border-4 border-white"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              {/* Floating badges */}
              <motion.div
                className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-lg"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <Code className="text-primary-600" size={24} />
              </motion.div>
              
              <motion.div
                className="absolute -bottom-4 -left-4 bg-white rounded-full p-3 shadow-lg"
                animate={{ rotate: [360, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <TestTube className="text-secondary-600" size={24} />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;