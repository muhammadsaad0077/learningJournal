import { motion } from "framer-motion";

const EntryList = ({ entry }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      className="
        mb-4
        p-4
        rounded-xl
        bg-gray-50
        hover:bg-gray-100
        transition
      "
    >
      <ul className="list-disc ml-6 text-gray-700">
        {entry.topics.map((topic, index) => (
          <li key={index} className="hover:text-black transition">
            {topic}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default EntryList;
