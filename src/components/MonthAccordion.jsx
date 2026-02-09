import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MonthAccordion = ({ month, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="mb-4">

      <motion.button
        whileTap={{ scale: 0.97 }}
        onClick={() => setOpen(!open)}
        className="
          w-full
          text-left
          p-4
          rounded-xl
          bg-gradient-to-r
          from-gray-50
          to-gray-100
          hover:shadow-md
          transition
          flex
          justify-between
          items-center
        "
      >
        <span className="font-semibold text-lg text-gray-700">
          {month.name}
        </span>

        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          ▼
        </motion.span>
      </motion.button>

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
              p-4
              bg-white
              border
              rounded-xl
              mt-2
              shadow-sm
            ">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default MonthAccordion;
