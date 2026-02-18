import { motion } from "framer-motion";
import useLearningData from "../hooks/useLearningData";
import SemesterCard from "../components/SemesterCard";
import EntryList from "../components/EntryList";

const Home = () => {
  const { learningData, loading } = useLearningData();

  if (loading)
    return (
      <p className="text-center mt-10">
        Loading...
      </p>
    );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="
        min-h-screen
        bg-gradient-to-br
        from-gray-100
        to-gray-200
        p-8
      "
    >
      <h1 className="
        text-4xl
        font-bold
        mb-10
        text-center
        bg-gradient-to-r
        from-gray-800
        to-gray-500
        bg-clip-text
        text-transparent
      ">
        My Learning Journal
      </h1>

      {learningData.map((semester) => (
        <SemesterCard key={semester.id} semester={semester}>
          
          {semester.entries.map((entry) => (
            <EntryList
              key={entry.id}
              entry={entry}
            />
          ))}

        </SemesterCard>
      ))}

    </motion.div>
  );
};

export default Home;
