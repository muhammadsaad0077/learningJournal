import { motion } from "framer-motion";

const SemesterCard = ({ semester, children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
      className="
        bg-white/80
        backdrop-blur-lg
        rounded-2xl
        shadow-lg
        hover:shadow-2xl
        transition-all
        duration-300
        p-6
        mb-8
        border border-gray-200
      "
    >
      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        {semester.name}
      </h2>

      {children}
    </motion.div>
  );
};

export default SemesterCard;
