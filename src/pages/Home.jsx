import useLearningData from "../hooks/useLearningData";
import SemesterCard from "../components/SemesterCard";
import MonthAccordion from "../components/MonthAccordion";
import LearningEntry from "../components/LearningEntry";
import { motion } from "framer-motion";


const Home = () => {
  const { learningData, loading } = useLearningData();

  if (loading)
    return (
      <p className="text-center mt-10">
        Loading...
      </p>
    );

  return (
    <motion.div initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.6 }}
  className="bg-gradient-to-br from-gray-100 to-gray-900 p-8">

      <h1 className="text-4xl font-bold mb-8 text-center">
        My Learning Journal
      </h1>

      {learningData.map((semester) => (
        <SemesterCard key={semester.id} semester={semester}>

          {semester.months.map((month) => (
            <MonthAccordion key={month.id} month={month}>

              {month.entries.map((entry) => (
                <LearningEntry
                  key={entry.id}
                  entry={entry}
                />
              ))}

            </MonthAccordion>
          ))}

        </SemesterCard>
      ))}

    </motion.div>
  );
};

export default Home;
