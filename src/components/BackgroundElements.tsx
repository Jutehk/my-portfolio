import { motion } from 'framer-motion';

const BackgroundElements = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 mesh-bg opacity-30" />
      
      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full opacity-20"
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute top-1/3 right-20 w-16 h-16 bg-gradient-to-r from-accent-400 to-primary-400 rounded-lg opacity-20"
        animate={{
          y: [0, 40, 0],
          x: [0, -25, 0],
          rotate: [0, -180, -360],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-12 h-12 bg-gradient-to-r from-secondary-400 to-accent-400 rounded-full opacity-20"
        animate={{
          y: [0, -25, 0],
          x: [0, 30, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute top-2/3 right-1/3 w-8 h-8 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full opacity-20"
        animate={{
          y: [0, 35, 0],
          x: [0, -20, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40" />
    </div>
  );
};

export default BackgroundElements;