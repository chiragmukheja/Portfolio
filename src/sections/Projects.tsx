import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "EchoServe",
    description:
      "Developed a full-stack system that automates guest requests via WhatsApp and manages them through a secure real-time dashboard, combining backend automation with a clean, user-friendly interface for streamlined admin control.",
    image: "/Project4.png",
    source: "https://github.com/chiragmukheja/hotel-logging-bot",
    demo: "#",
  },
  {
    title: "Employee Management System",
    description:
      "A React-based task management platform where admins can assign tasks to employees in real time. The dashboard reflects task status dynamically categorized into New, Pending, Completed, and Deleted for both admins and employees.",
    image: "/Project1.png",
    source: "https://github.com/chiragmukheja/Employee-Management-System",
    demo: "#",
  },
  {
    title: "SCATCH E-Com",
    description:
      "A scalable backend architecture for an e-commerce platform built with Node.js, featuring secure authentication using JWT, session handling, and cookies. Includes robust add-to-cart functionality and route protection, structured for extensibility.",
    image: "/Project2.png",
    source: "https://github.com/chiragmukheja/SCATH-Ecom",
    demo: "#",
  },
  {
    title: "Youtube Bookmarker",
    description:
      "A Chrome Extension built with JavaScript and Manifest V3 that allows users to bookmark moments within YouTube videos for quick revisit without searching again.",
    image: "/Project3.jpg",
    source: "https://github.com/chiragmukheja/Youtube-Bookmarker",
    demo: "#",
  },
];

const Projects = () => {
  return (
    <div className="text-white relative h-full flex flex-col">
      {/* Title section */}
      <div className="sticky top-0 z-10 pb-4 px-8">
        <h2 className="text-3xl pb-2 font-bold">Projects</h2>
        <div className="w-12 h-1 bg-yellow-400 rounded-sm mt-2" />
      </div>

      {/* Scrollable grid */}
      <div className="flex-1 overflow-y-auto px-8 pb-8 pt-4 scrollbar-hide">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p, idx) => (
            <ProjectCard key={idx} {...p} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
