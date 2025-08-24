import { motion } from 'framer-motion';
import { GraduationCap, Award, Target, TestTube, Shield, CheckCircle, Users, Clock } from 'lucide-react';

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
      id: "degree",
      icon: GraduationCap,
      title: "Mathematics & Computer Science",
      subtitle: "Kenyatta University • Dec 2025",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      id: "certification",
      icon: Award,
      title: "Software Testing Certification",
      subtitle: "PLP Academy • Dec 2025",
      color: "text-teal-600",
      bgColor: "bg-teal-50",
    },
    {
      id: "goal",
      icon: Target,
      title: "QA Engineering Career",
      subtitle: "Seeking Full-Time QA Engineer Role",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
  ];

  const qaStrengths = [
    {
      id: "manual",
      icon: TestTube,
      title: "Manual Testing Expertise",
      description: "Comprehensive test case design and execution across web and mobile applications"
    },
    {
      id: "automation",
      icon: Shield,
      title: "Test Automation",
      description: "Building robust automated test suites using modern frameworks and tools"
    },
    {
      id: "quality",
      icon: CheckCircle,
      title: "Quality Assurance",
      description: "Implementing QA processes that ensure software reliability and user satisfaction"
    },
    {
      id: "collaboration",
      icon: Users,
      title: "Cross-functional Collaboration",
      description: "Working effectively with development teams to integrate quality throughout SDLC"
    },
    {
      id: "documentation",
      icon: Clock,
      title: "Test Documentation",
      description: "Creating detailed test plans, cases, and reports for comprehensive coverage"
    },
    {
      id: "continuous",
      icon: Target,
      title: "Continuous Improvement",
      description: "Always seeking ways to enhance testing processes and methodologies"
    },
  ];

  return (
    <section id="about" className="section-padding bg-gray-50">
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
            <h2 className="text-4xl font-bold text-gray-900">
              About <span className="text-blue-600">Me</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A dedicated QA professional passionate about ensuring software excellence through 
              meticulous testing and quality assurance practices.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full mx-auto" />
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Story Section */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">My QA Journey</h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  My passion for software testing began during my studies in{' '}
                  <span className="font-semibold text-blue-600">Mathematics and Computer Science</span>{' '}
                  at Kenyatta University, where I discovered the critical importance of quality 
                  assurance in software development.
                </p>
                <p>
                  This passion led me to pursue specialized training at{' '}
                  <span className="font-semibold text-teal-600">PLP Academy</span>, where I'm 
                  mastering both manual and automated testing methodologies. I believe that 
                  quality isn't just about finding bugs—it's about ensuring exceptional user 
                  experiences and building trust in software products.
                </p>
                <p>
                  My analytical background in mathematics provides me with a unique perspective 
                  on test design and problem-solving. I approach each testing challenge with 
                  systematic thinking, attention to detail, and a commitment to delivering 
                  software that users can rely on.
                </p>
                <p>
                  I'm actively seeking opportunities to contribute my QA expertise to a dynamic 
                  team where I can help build high-quality software products while continuing 
                  to grow in the field of quality assurance.
                </p>
              </div>
            </motion.div>

            {/* Achievements */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Education & Goals</h3>
              <div className="space-y-4">
                {achievements.map((achievement) => (
                  <motion.div
                    key={achievement.id}
                    className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
                    whileHover={{ scale: 1.02, y: -2 }}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-xl ${achievement.bgColor}`}>
                        <achievement.icon size={24} className={achievement.color} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{achievement.title}</h4>
                        <p className="text-gray-600 text-sm">{achievement.subtitle}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* QA Strengths Section */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">QA Expertise & Strengths</h3>
              <p className="text-gray-600">
                Core competencies that drive my success in quality assurance
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {qaStrengths.map((strength) => (
                <motion.div
                  key={strength.id}
                  variants={itemVariants}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="text-center space-y-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-50 rounded-xl mb-4">
                      <strength.icon size={24} className="text-blue-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900">{strength.title}</h4>
                    <p className="text-sm text-gray-600">{strength.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="text-center bg-blue-50 rounded-2xl p-8 border border-blue-100"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Ready to ensure your software quality?
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