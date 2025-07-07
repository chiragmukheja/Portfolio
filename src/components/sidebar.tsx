import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  MessageCircle,
  Download,
} from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="w-full sm:w-[300px] bg-[#3C3B3B] border border-[#787878] rounded-3xl p-6 sm:p-8 shadow-xl flex text-white h-full">
    <div className="flex flex-col items-center justify-center w-full min-h-full">
        {/* Memoji */}
        <img
        src="/memoji.png"
        alt="Chirag Memoji"
        className="w-28 h-28 sm:w-36 sm:h-36 object-cover bg-[#D9D9D9] bg-opacity-50 mb-4 p-4 rounded-3xl"
        />

        {/* Name & Role */}
        <h2 className="text-xl sm:text-2xl font-bold text-center">Chirag Mukheja</h2>
        <span className="text-xs sm:text-sm mt-2">
        Full Stack Developer
        </span>
        <a
        href="https://drive.google.com/file/d/1q2aLYcodMdoe2GcmpXui1Rj4fILdcblb/view?usp=drive_link"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 bg-[#959292] bg-opacity-60 px-4 py-1 rounded-lg text-center font-semibold text-white hover:text-yellow-400 flex items-center justify-center gap-2"
        >
        <Download size={18} />
        Resume
        </a>

        <hr className="my-4 w-full border-white/30" />

        {/* Info Items */}
        <div className="w-full space-y-4 text-sm">
        {[
            {
            icon: <Mail size={22} />,
            title: "EMAIL",
            value: "mukhejachirag22@gmail.com",
            },
            {
            icon: <Phone size={22} />,
            title: "PHONE",
            value: "+91 9988774955",
            },
            {
            icon: <MapPin size={22} />,
            title: "LOCATION",
            value: "Patiala, India",
            },
        ].map((item, idx) => (
            <div key={idx} className="px-2 sm:px-4">
            <div className="flex items-start gap-3">
                <div className="bg-[#464545] shadow-inner-drop p-2 text-[#FFDE21] rounded-md">
                {item.icon}
                </div>
                <div className="leading-snug flex-1 break-all overflow-hidden text-ellipsis">
                <div className="text-xs sm:text-xs text-white/80">{item.title}</div>
                <div className="font-semibold text-sm sm:text-base">{item.value}</div>
                </div>
            </div>
            </div>
        ))}
        </div>

        {/* Social Links */}
        <div className="flex gap-4 mt-6">
        <a href="https://www.linkedin.com/in/chirag-mukheja/" target="_blank">
            <div className="p-2 rounded-md hover:bg-white/10 transition">
            <Linkedin size={20} />
            </div>
        </a>
        <a href="https://github.com/chiragmukheja" target="_blank">
            <div className="p-2 rounded-md hover:bg-white/10 transition">
            <Github size={20} />
            </div>
        </a>
        <a href="https://wa.me/919988774955" target="_blank">
            <div className="p-2 rounded-md hover:bg-white/10 transition">
            <MessageCircle size={20} />
            </div>
        </a>
        </div>
    </div>
    </aside>
  );
};


export default Sidebar;
