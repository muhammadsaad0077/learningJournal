import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SemesterCard = ({ semester, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="mb-6 moveBottom">

      {/* HEADER BUTTON */}
      <motion.button
        whileTap={{ scale: 0.97 }}
        onClick={() => setOpen(!open)}
        className="
          w-full
          p-5
          rounded-2xl
          bg-white/80
          backdrop-blur-lg
          shadow-md
          hover:shadow-xl
          flex
          justify-between
          items-center
          border border-gray-200
          transition
        "
      >
        <span className="text-xl font-bold text-gray-800">
          {semester.name}
        </span>

        {/* Arrow Animation */}
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-lg"
        >
          ▼
        </motion.span>
      </motion.button>

      {/* CONTENT */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="overflow-hidden"
          >
            <div className="
              mt-3
              p-5
              bg-white
              rounded-2xl
              shadow-sm
              border
            ">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default SemesterCard;
