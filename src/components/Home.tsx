import { motion } from 'framer-motion';
import { ArrowRight, TestTube, Shield, Sparkles } from 'lucide-react';
import ProfileSidebar from './ProfileSidebar';
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
    <section id="home" className="min-h-screen flex items-center section-padding pt-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container">
        {/* Mobile Profile Picture - Only visible on small screens */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="md:hidden fixed top-4 left-4 z-40"
        >
          <img
            src={profile}
            alt="Juliana Ndunge"
            className="w-12 h-12 rounded-full object-cover border-2 border-blue-500 shadow-lg"
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-3 gap-12 items-start"
        >
          {/* Profile Sidebar */}
          <div className="lg:order-1 order-2 hidden md:block">
            <ProfileSidebar />
          </div>

          {/* Main Content */}
          <div className="md:lg:col-span-2 lg:order-2 order-1 space-y-8 md:col-span-full">
            <motion.div variants={itemVariants} className="space-y-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full text-sm font-medium text-blue-700"
              >
                <Sparkles className="w-4 h-4 animate-pulse" />
                Available for QA Opportunities
              </motion.div>
              
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-gray-900">
                  Hello, I'm{' '}
                  <span className="text-blue-600 block">Juliana Ndunge</span>
                </h1>
                
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-xl md:text-2xl text-gray-600">
                  <motion.div
                    className="flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                  >
                    <TestTube className="text-blue-600" size={24} />
                    <span>QA Engineer</span>
                  </motion.div>
                  <span className="hidden sm:block text-gray-400">•</span>
                  <motion.div
                    className="flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Shield className="text-teal-600" size={24} />
                    <span>Software Tester</span>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                A passionate Quality Assurance Engineer with expertise in{' '}
                <span className="font-semibold text-blue-600">Manual Testing</span> and{' '}
                <span className="font-semibold text-teal-600">Test Automation</span>.
                Completed a Mathematics and Computer Science degree at {' '}
                <span className="font-semibold text-gray-800">Kenyatta University (awaiting official graduation in December 2025)</span> 
               alongside a Software Testing certification from {' '}
                <span className="font-semibold text-gray-800">PLP Academy</span>.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                I specialize in ensuring software quality through comprehensive testing strategies, 
                automated test frameworks, and meticulous bug tracking. My goal is to deliver 
                reliable, high-quality software that exceeds user expectations.
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
              className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-gray-200"
            >
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-blue-600">2025</div>
                <div className="text-sm text-gray-600">Graduate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-blue-600">50+</div>
                <div className="text-sm text-gray-600">Test Cases</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-blue-600">15+</div>
                <div className="text-sm text-gray-600">Projects Tested</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-blue-600">100%</div>
                <div className="text-sm text-gray-600">Quality Focused</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;