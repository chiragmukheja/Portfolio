import { AnimatePresence, motion } from "framer-motion";
import About from "../sections/About";
import Education from "../sections/Education";
import Projects from "../sections/Projects";
import Skills from "../sections/skills";
import Contact from "../sections/Contact";

interface RightPanelProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const tabs = ["About", "Education", "Skills", "Projects", "Contact"];

const RightPanel = ({ activeTab, setActiveTab }: RightPanelProps) => {
  const renderContent = () => {
    switch (activeTab) {
      case "About":
        return <About />;
      case "Education":
        return <Education />;
      case "Skills":
        return <Skills />;
      case "Projects":
        return <Projects />;
      case "Contact":
        return <Contact />;
      default:
        return <div className="text-white p-6">Coming Soon...</div>;
    }
  };

  return (
    <div className="w-full max-w-full h-full flex-1 bg-[#3C3B3B] border border-[#787878] rounded-2xl shadow-xl flex flex-col overflow-hidden">
      {/* Top Nav */}
      <div className="self-end w-[45%] h-[60px] bg-[#504F4F] border border-[#726F6F] rounded-tr-2xl rounded-bl-2xl shadow-md flex items-center justify-end gap-6 px-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`transition-all font-medium duration-200 ${
              activeTab === tab
                ? "text-[#FFDE21] text-base font-semibold"
                : "text-gray-300 text-sm hover:text-white"
            }`}
            style={{ minWidth: "70px", lineHeight: "1rem" }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Section Content */}
      <div className="flex-1 min-h-[500px] relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-0 px-6 py-6 overflow-y-auto scrollbar-hide"
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default RightPanel;
