import "./App.css";
import { useState } from "react";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedCourses, setSelectedCourses] = useState([]);

  const handleNextStep = (data) => {
    switch (step) {
      case 1:
        setName(data.name);
        setEmail(data.email);
        setStep(2);
        break;
      case 2:
        setSelectedCourses(data);
        setStep(3);
        break;
      case 3:
        // Handle confirmation
        break;
      default:
        break;
    }
  };

  const handlePreviousStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleCourseSelect = (courseId, isDeselect = false) => {
    setSelectedCourses((prevCourses) => {
      if (isDeselect) {
        return prevCourses.filter((id) => id !== courseId);
      } else {
        return [...prevCourses, courseId];
      }
    });
  };

  return (
    <div className="app-container">
      <AnimatePresence>
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.5 }}
            style={{ position: "absolute", width: "100%" }}
          >
            <Step1 onNext={handleNextStep} />
          </motion.div>
        )}
        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.5 }}
            style={{ position: "absolute", width: "100%" }}
          >
            <Step2
              selectedCourses={selectedCourses}
              onSelect={handleCourseSelect}
              onBack={handlePreviousStep}
              onNext={() => setStep(3)}
            />
          </motion.div>
        )}
        {step === 3 && (
          <motion.div
            key="step3"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.5 }}
            style={{ position: "absolute", width: "100%" }}
          >
            <Step3
              name={name}
              email={email}
              selectedCourses={selectedCourses}
              onBack={handlePreviousStep}
              onConfirm={() => alert("Confirmation screen")}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
