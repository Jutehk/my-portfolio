import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Calendar, GraduationCap } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import profile from "../assets/profile.jpg";

const ProfileSidebar = () => {
  const personalInfo = [
    {
      id: "email",
      icon: Mail,
      label: "Email",
      value: "julianandunge54@gmail.com",
    },
    { id: "phone", icon: Phone, label: "Phone", value: "+254718453328" },
    {
      id: "location",
      icon: MapPin,
      label: "Location",
      value: "Nairobi, Kenya",
    },
    {
      id: "available",
      icon: Calendar,
      label: "Available",
      value: "Immediately",
    },
    {
      id: "graduation",
      icon: GraduationCap,
      label: "Graduation",
      value: "Dec 2025",
    },
  ];

  const socialLinks = [
    {
      id: "linkedin",
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/juliana-ndunge/",
      color: "text-blue-600",
    },
    {
      id: "github",
      icon: FaGithub,
      href: "https://github.com/Jutehk",
      color: "text-gray-800",
    },
    {
      id: "instagram",
      icon: FaInstagram,
      href: "https://www.instagram.com/julie05kim/",
      color: "text-pink-600",
    },
  ];

  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-white rounded-2xl shadow-xl p-6 space-y-6 border border-gray-200"
    >
      {/* Profile Image */}
      <div className="text-center">
        <motion.div
          className="relative inline-block"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src={profile}
            alt="Juliana Ndunge"
            className="w-32 h-32 rounded-full object-cover border-4 border-blue-500 shadow-lg"
          />
          <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
        </motion.div>
        <h3 className="mt-4 text-xl font-bold text-gray-900">
          Juliana Ndunge
        </h3>
        <p className="text-blue-600 font-medium">
          QA Engineer & Software Tester
        </p>
      </div>

      {/* Personal Information */}
      <div className="space-y-3">
        {personalInfo.map((info) => (
          <motion.div
            key={info.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-3 text-sm"
          >
            <div className="p-2 bg-gray-100 rounded-lg">
              <info.icon size={16} className="text-blue-600" />
            </div>
            <div>
              <p className="text-gray-500 text-xs">{info.label}</p>
              <p className="text-gray-900 font-medium">{info.value}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Social Links */}
      <div className="pt-4 border-t border-gray-200">
        <p className="text-sm font-medium text-gray-900 mb-3">
          Connect with me
        </p>
        <div className="flex gap-3">
          {socialLinks.map((social) => (
            <motion.a
              key={social.id}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 bg-gray-100 rounded-lg ${social.color} hover:scale-110 transition-all duration-200`}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <social.icon size={18} />
            </motion.a>
          ))}
        </div>
      </div>

      {/* Download CV Button */}
      <motion.a
        href="/Juliana1.pdf"
        download
        className="w-full btn-primary text-center text-sm py-2"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        Download CV
      </motion.a>
    </motion.div>
  );
};

export default ProfileSidebar;