type Props = {
  title: string;
  description: string;
  image: string;
  source: string;
  // demo: string;
};

const ProjectCard = ({ title, description, image, source }: Props) => {
  return (
    <div className="bg-[#464545] rounded-xl p-4 shadow-inner-drop flex flex-col justify-between h-full">
      {/* Image */}
      <div className="mb-3">
        <img src={image} alt={title} className="rounded-lg w-full object-cover" />
      </div>

      {/* Title & Desc */}
      <div className="flex-1">
        <h3 className="text-white font-semibold mb-1">{title}</h3>
        <p className="text-sm text-gray-400">{description}</p>
      </div>

      <div className="flex justify-end gap-4 text-sm mt-4">
        <a href={source} target="_blank" className="text-[#FFDE21] hover:font-semibold">
          Source Code
        </a>
        {/* <a href={demo} target="_blank" className="text-[#FFDE21] hover:font-semibold">
          Live Demo
        </a> */}
      </div>
    </div>
  );
};

export default ProjectCard;
