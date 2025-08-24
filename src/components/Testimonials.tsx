import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
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

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Senior Developer",
      company: "TechCorp Solutions",
      content: "Juliana's attention to detail in testing is exceptional. She consistently identifies edge cases that others miss and provides clear, actionable bug reports that make fixing issues straightforward.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Project Manager",
      company: "Digital Innovations",
      content: "Working with Juliana has significantly improved our software quality. Her systematic approach to testing and comprehensive documentation has streamlined our development process.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "QA Lead",
      company: "StartupHub",
      content: "Juliana brings fresh perspectives to testing strategies. Her automation skills have helped us reduce testing time by 40% while maintaining high quality standards.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    }
  ];

  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex gap-1">
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          size={16}
          className={`${
            index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  );

  return (
    <section id="testimonials" className="section-padding bg-white">
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
              Client <span className="text-blue-600">Testimonials</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              What colleagues and clients say about working with me on quality assurance projects.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full mx-auto" />
          </motion.div>

          {/* Testimonials Grid */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                variants={itemVariants}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.3 },
                }}
                className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 relative"
              >
                {/* Quote Icon */}
                <div className="absolute top-6 right-6">
                  <Quote size={24} className="text-blue-200" />
                </div>

                <div className="space-y-6">
                  {/* Rating */}
                  <StarRating rating={testimonial.rating} />

                  {/* Content */}
                  <p className="text-gray-600 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">
                        {testimonial.role} at {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="text-center bg-gray-50 rounded-2xl p-8 border border-gray-200"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Ready to experience quality-focused testing?
            </h3>
            <motion.a
              href="#contact"
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Project
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;