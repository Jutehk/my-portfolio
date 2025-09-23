import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    if (status !== 'idle') {
      const timer = setTimeout(() => setStatus('idle'), 3000);
      return () => clearTimeout(timer);
    }
  }, [status]);

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
    { id: 'email', icon: Mail, value: 'julianandunge54@gmail.com' },
    { id: 'phone', icon: Phone, value: '+254718453328' },
  ];

  const socialLinks = [
    { id: 'github', label: 'GitHub', url: 'https://github.com/Jutehk', icon: FaGithub },
    { id: 'linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/in/juliana-ndunge/', icon: FaLinkedin },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('idle');

    const form = e.currentTarget;
    const data = new FormData(form);

    const response = await fetch('https://formspree.io/f/xeokzwkq', {
      method: 'POST',
      body: data,
      headers: {
        Accept: 'application/json',
      },
    });

    if (response.ok) {
      setStatus('success');
      form.reset();
    } else {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-16"
        >
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Contact <span className="text-blue-600">Me</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Ready to discuss your QA needs? I'd love to hear about your project and how I can help ensure your software meets the highest quality standards.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full mx-auto" />
          </motion.div>

          <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4 lg:space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Get in Touch</h3>

              <ul className="space-y-4">
                {contactDetails.map((item) => (
                  <li key={item.id} className="flex items-center gap-3 lg:gap-4 text-sm sm:text-base text-gray-700">
                    <item.icon className="text-blue-600" size={24} />
                    <span>{item.value}</span>
                  </li>
                ))}
              </ul>

              <div className="flex gap-4 mt-6">
                {socialLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.url}
                    className="text-blue-600 hover:text-blue-700 transition-colors p-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <link.icon size={20} />
                    <span className="sr-only">{link.label}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-4 lg:space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Send a Message</h3>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full p-3 text-sm sm:text-base border border-gray-300 rounded-lg bg-white text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full p-3 text-sm sm:text-base border border-gray-300 rounded-lg bg-white text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                  required
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  className="w-full p-3 text-sm sm:text-base border border-gray-300 rounded-lg bg-white text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                  required
                />

                {status === 'success' && (
                  <p className="text-sm sm:text-base text-green-600">Message sent successfully!</p>
                )}
                {status === 'error' && (
                  <p className="text-sm sm:text-base text-red-600">Oops! Something went wrong.</p>
                )}

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