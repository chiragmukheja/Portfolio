
const skills = [
  { name: "Node.js", logo: "/icons/nodejs.svg", size: "wide" },
  { name: "MongoDB", logo: "/icons/mongodb.svg", size: "tall" },
  { name: "React", logo: "/icons/react.svg", size: "square" },
  { name: "n8n", logo: "/icons/n8n.svg", size: "wide" },
  { name: "Tailwind", logo: "/icons/tailwind.svg", size: "square" },
  { name: "Express", logo: "/icons/express.svg", size: "wide" },
  { name: "JavaScript", logo: "/icons/javascript.svg", size: "square" },
  { name: "Figma", logo: "/icons/figma.svg", size: "tall" },
  { name: "GitHub", logo: "/icons/github.svg", size: "square" },
  { name: "Prisma", logo: "/icons/prisma.svg", size: "tall" },
  { name: "HTML", logo: "/icons/html.svg", size: "square" },
  { name: "CSS", logo: "/icons/css.svg", size: "square" },
  { name: "Git", logo: "/icons/git.svg", size: "wide" },
  { name: "Photoshop", logo: "/icons/photoshop.svg", size: "square" },

];

const tileSizeClasses = {
  large: "col-span-2 row-span-2",
  wide: "col-span-2 row-span-1",
  tall: "col-span-1 row-span-2",
  square: "col-span-1 row-span-1",
};

const iconSizes = {
  "Node.js": "w-[100%] h-[180%]",
  "MongoDB": "w-[100%] h-[100%]",
  "React": "w-[80%] h-[80%]",
  "n8n": "w-[100%] h-[120%]",
  "Tailwind": "w-[80%] h-[80%]",
  "Express": "w-[100%] h-[180%]",
  "JavaScript": "w-[80%] h-[80%]",
  "Figma": "w-[110%] h-[100%]",
  "GitHub": "w-[90%] h-[90%]",
  "Prisma": "w-[100%] h-[65%]",
  "HTML": "w-[80%] h-[80%]",
  "CSS": "w-[80%] h-[80%]",
  "Git": "w-[65%] h-[140%]",
};

const Skills = () => {
  return (
    <div className="text-white h-full flex flex-col ">
      {/* Section Heading */}
      <div className="pb-6 px-8">
        <h2 className="text-3xl font-bold">Skills</h2>
        <div className="w-12 h-1 bg-yellow-400 rounded-sm mt-2" />
      </div>

      {/* Adaptive Grid Container */}
      <div className="px-8 pb-8 flex-1">
        <div
          className="grid gap-4 h-full "
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(7, 1fr)",
            gridAutoRows: "140px",
            gridAutoFlow: "dense",
          }}
        >
          {skills.map((skill, i) => (
            <div
              key={i}
              className={`bg-[#2c2c2c] p-4 rounded-2xl shadow-inner-drop flex items-center justify-center hover:shadow-yellow-400/20 hover:scale-[1.03] transition-all duration-300 ease-out ${tileSizeClasses[skill.size]}`}
            >
              <img
                src={skill.logo}
                alt={skill.name}
                className={`object-contain ${iconSizes[skill.name] || "w-[60%] h-[60%]"}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
