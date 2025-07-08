import { useState } from "react";
import Sidebar from "./components/sidebar";
import RightPanel from "./components/RightPanel";

export default function App() {
  const [activeTab, setActiveTab] = useState("About");
  const isContact = activeTab === "Contact";

  return (
    <div className="min-h-screen w-full bg-[#181818] flex items-center justify-center px-4 py-6 sm:py-10 lg:py-12">
      <div
        className={`flex flex-col lg:flex-row gap-6 w-full max-w-[1600px] min-h-[90vh] transition-all duration-500 ease-in-out`}
      >
        {/* Sidebar - completely removed on Contact */}
        {!isContact && (
          <div className="w-full lg:w-[22%] min-w-[250px] max-w-[300px] transition-all duration-500 ease-in-out">
            <Sidebar />
          </div>
        )}

        {/* Right Panel expands full when Contact is active */}
        <div
          className={`transition-all duration-500 ease-in-out ${
            isContact ? "w-full" : "flex-1"
          }`}
        >
          <RightPanel activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
      </div>
    </div>
  );
}
