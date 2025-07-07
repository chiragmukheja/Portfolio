import { BookOpen } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const educationData = [
  {
    institute: "Chitkara University, Punjab",
    years: "2021-2025",
    description:
      "Adapted to complex problem-solving through hands-on projects and technical challenges.\nDeveloped analytical and collaboration skills essential for industry-ready innovation.",
  },
  {
    institute: "Premier Public School, Samana",
    years: "2019-2021",
    description:
      "Study of Physics, focusing on concepts, laws, and real-world applications.\nStudy of Chemistry and Mathematics, covering equations, formulas, and problem-solving methods.",
  },
  {
    institute: "DAV Public School, Samana",
    years: "2017-2019",
    description:
      "Fundamental learning in Science, Mathematics, and Language, building essential academic skills.\nFirst introduction to basic programming.",
  },
];

const Education = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [lineHeight, setLineHeight] = useState(0);

  useEffect(() => {
    const updateLineHeight = () => {
      if (timelineRef.current) {
        const lastEntry = timelineRef.current.lastElementChild;
        if (lastEntry) {
          const lastDot = lastEntry.querySelector("span");
          if (lastDot) {
            const rect = (lastDot as HTMLElement).getBoundingClientRect();
            const topOfTimeline = timelineRef.current.getBoundingClientRect().top;
            const height = rect.top - topOfTimeline + rect.height / 2;
            setLineHeight(height);
          }
        }
      }
    };

    updateLineHeight();
    window.addEventListener("resize", updateLineHeight);
    return () => window.removeEventListener("resize", updateLineHeight);
  }, []);

  return (
    <div className="text-white px-8 relative">
      {/* Heading */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold">Education</h2>
        <div className="w-14 h-1 bg-[#FFDE21] rounded-sm mt-4" />
      </div>

      {/* Book icon block */}
      <div className="absolute left-8 top-20 w-14 h-14 bg-[#3C3B3B] rounded-lg shadow-inner-drop flex items-center justify-center z-10">
        <BookOpen className="text-[#FFDE21]" size={25} />
      </div>

      {/* Timeline line */}
      <div
        className="absolute left-14 top-24 w-[2px] bg-gray-100/80 z-0 transition-all duration-300"
        style={{ height: lineHeight }}
      />

      {/* Entries */}
      <div ref={timelineRef} className="pl-9 pt-16 space-y-5 relative z-10">
        {educationData.map((edu, i) => (
          <div key={i} className="relative">
            {/* Dot */}
            <span className="absolute -left-5 top-1.5 w-4 h-4 bg-[#FFDE21] rounded-full border-4 border-gray-200" />

            {/* Content */}
            <div className="pl-2">
              <h3 className="font-semibold text-white text-lg">{edu.institute}</h3>
              <p className="text-[#FFDE21] text-sm mb-1">{edu.years}</p>
              {edu.description.split("\n").map((line, idx) => (
                <p key={idx} className="text-gray-300 text-sm leading-relaxed">
                  {line}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
