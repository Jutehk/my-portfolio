import { useState } from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Contact.css';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(false);
    setError(false);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const response = await fetch("https://formspree.io/f/xyzwealj", {
      method: "POST",
      headers: { Accept: "application/json" },
      body: formData
    });

    if (response.ok) {
      setSubmitted(true);
      form.reset();
  
      // Hide the success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    } else {
      setError(true);
  
      // Hide the error message after 5 seconds
      setTimeout(() => setError(false), 5000);
    }
  };
  
  return (
    <section id="contact" className="contact-section">
      <motion.div
        className="contact-wrapper"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <div className="contact-info">
          <h2>Let's Connect</h2>
          <p>If you’d like to chat about a project or just say hello, feel free to send me a message. I’m always open to discussing new opportunities or collaborations.</p>
          <div className="contact-details">
            <p><strong>Email:</strong> julianandunge54@gmail.com</p>
            <p><strong>Phone:</strong> +254718453328</p>
          </div>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/juliana-ndunge/" target="_blank" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="https://www.instagram.com/julie05kim/" target="_blank" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://github.com/Jutehk" target="_blank" aria-label="GitHub"><FaGithub /></a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h3>Send a Message</h3>
          {submitted && <p className="success-message">✅ Thank you! Your message has been sent.</p>}
          {error && <p className="error-message">❌ Oops! Something went wrong. Try again later.</p>}
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows={5} placeholder="Write your message..." required />
          <button type="submit" className="btn">Send Message</button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
