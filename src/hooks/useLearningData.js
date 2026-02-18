import { useEffect, useState } from "react";
import data from "../data/learningData.json";

const useLearningData = () => {
  const [learningData, setLearningData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetch delay (optional but good for UX testing)
    setTimeout(() => {
      setLearningData(data.semesters);
      setLoading(false);
    }, 500);
  }, []);

  return { learningData, loading };
};

export default useLearningData;
