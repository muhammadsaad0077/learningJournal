import { motion } from "framer-motion";

const LearningEntry = ({ entry }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      className="mb-4 ml-2"
    >
      <p className="font-semibold text-gray-800">
        {entry.period}
      </p>

      <ul className="list-disc ml-6 mt-1 text-gray-600">
        {entry.topics.map((topic, index) => (
          <li key={index} className="hover:text-black transition">
            {topic}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default LearningEntry;
