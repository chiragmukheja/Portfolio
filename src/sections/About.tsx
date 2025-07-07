import { Code, Workflow } from "lucide-react";

const About = () => {
  return (
    <div className="text-white px-8 space-y-10">
      {/* Top Section Heading */}
      <div className="space-y-4">
        <h2 className="text-3xl font-bold">About Me</h2>
        <div className="w-14 h-1 bg-[#FFDE21] rounded-sm" />
        <p className="text-white text-sm leading-relaxed">
          I enjoy building things that are clear, functional, and quietly reliable. Most of my work sits somewhere between the frontend and backend, with a focus on structure, consistency, and how everything ties together. It's less about doing too much, more about making sure whatever's built actually holds up and stays clean under the hood.
        </p>
        <p className="text-white text-sm leading-relaxed">
          Lately, I've been leaning into projects that mix backend systems, simple UI layers, and background automation. I like when things just work without needing constant fixes. There's always more to learn, but I prefer learning by doing — building one thing properly instead of chasing ten things at once.
        </p>
      </div>

      {/* What I'm Doing */}
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold">What I'm Doing</h3>
        <div className="flex flex-col md:flex-row gap-6">
          {/* Card 1 */}
          <div className="bg-[#464545] shadow-inner-drop rounded-xl px-5 py-6 w-full md:w-1/2 ">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-md">
                <Code className="text-[#FFDE21]" size={35} />
              </div>
              <div>
                <h4 className="text-white font-semibold">Web Development</h4>
                <p className="text-gray-400 text-sm">
                  Creating responsive, maintainable web applications using React, Node.js, Express, and MongoDB. Focusing on seamless interfaces and structured data flow, from initial design through deployment.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#464545] shadow-inner-drop rounded-xl px-5 py-6 w-full md:w-1/2">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-md">
                <Workflow className="text-[#FFDE21]" size={35} />
              </div>
              <div>
                <h4 className="text-white font-semibold">Automation Workflows</h4>
                <p className="text-gray-400 text-sm">
                  Developing seamless automation through n8n, REST APIs, and intelligent integrations. Enabling reliable background processes and reducing repetitive tasks with smart orchestration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
