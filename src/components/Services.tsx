import { motion } from 'framer-motion';
import { TestTube, Zap, Globe, FileText, Bug, Users } from 'lucide-react';

const Services = () => {
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

  const services = [
    {
      id: "manual-testing",
      icon: TestTube,
      title: "Manual Testing",
      description: "Comprehensive manual testing including functional, usability, and exploratory testing to ensure your application meets user expectations.",
      features: ["Test Case Design", "Functional Testing", "Usability Testing", "Exploratory Testing"]
    },
    {
      id: "automation-testing",
      icon: Zap,
      title: "Automation Testing",
      description: "Building robust automated test suites using modern frameworks to increase testing efficiency and coverage.",
      features: ["Test Automation Frameworks", "Regression Testing", "CI/CD Integration", "Cross-browser Testing"]
    },
    {
      id: "api-testing",
      icon: Globe,
      title: "API Testing",
      description: "Thorough API testing to validate data exchange, functionality, reliability, and performance of your backend services.",
      features: ["REST API Testing", "Data Validation", "Performance Testing", "Security Testing"]
    },
    {
      id: "test-documentation",
      icon: FileText,
      title: "Test Documentation",
      description: "Creating comprehensive test documentation including test plans, test cases, and detailed test reports.",
      features: ["Test Plans", "Test Cases", "Test Reports", "Requirements Traceability"]
    },
    {
      id: "bug-tracking",
      icon: Bug,
      title: "Bug Tracking & Reporting",
      description: "Systematic bug identification, documentation, and tracking using industry-standard tools and methodologies.",
      features: ["Bug Documentation", "Severity Assessment", "Reproduction Steps", "Status Tracking"]
    },
    {
      id: "qa-consultation",
      icon: Users,
      title: "QA Consultation",
      description: "Strategic QA consultation to help establish testing processes, improve quality standards, and optimize testing workflows.",
      features: ["Process Improvement", "Tool Selection", "Team Training", "Quality Strategy"]
    }
  ];

  return (
    <section id="services" className="section-padding bg-gray-50">
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
              QA <span className="text-blue-600">Services</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive quality assurance services to ensure your software meets the highest 
              standards of quality, reliability, and user satisfaction.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full mx-auto" />
          </motion.div>

          {/* Services Grid */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 },
                }}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="space-y-6">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-xl">
                    <service.icon size={32} className="text-blue-600" />
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </div>

                  {/* Features */}
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900 text-sm">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, index) => (
                        <li key={index} className="text-sm text-gray-600 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="text-center bg-blue-50 rounded-2xl p-8 border border-blue-100"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need Quality Assurance for Your Project?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Let's discuss how I can help ensure your software meets the highest quality standards 
              and delivers exceptional user experiences.
            </p>
            <motion.a
              href="#contact"
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;