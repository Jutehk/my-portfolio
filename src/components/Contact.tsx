import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';


const Contact = () => {
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
        ease: 'easeOut',
      },
    },
  };

  const contactDetails = [
    { id: 'email', icon: Mail, value: 'juliana@example.com' },
    { id: 'phone', icon: Phone, value: '+254712345678' },
  ];

  const socialLinks = [
  { id: 'github', label: 'GitHub', url: 'https://github.com/juliana', icon: FaGithub },
  { id: 'linkedin', label: 'LinkedIn', url: 'https://linkedin.com/in/juliana', icon: FaLinkedin },
];

  return (
    <section id="contact" className="section-padding bg-white dark:bg-gray-900">
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-16"
        >
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
              Contact <span className="gradient-text">Me</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              I'd love to hear from you! Whether you have a question, a project in mind, or just want to connect — let's talk.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full mx-auto" />
          </motion.div>

          <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Get in Touch</h3>

              <ul className="space-y-4">
                {contactDetails.map((item) => (
                  <li key={item.id} className="flex items-center gap-4 text-gray-700 dark:text-gray-300">
                    <item.icon className="text-primary-600 dark:text-primary-400" size={24} />
                    <span>{item.value}</span>
                  </li>
                ))}
              </ul>

              <div className="flex gap-4 mt-6">
                {socialLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.url}
                    className="text-primary-600 dark:text-primary-400 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <link.icon size={24} />
                    <span className="sr-only">{link.label}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Send a Message</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  required
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  required
                />
                <motion.button
                  type="submit"
                  className="btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
