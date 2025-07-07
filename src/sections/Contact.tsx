import Memoji from "../components/memoji"; // <-- Make sure path is correct

const Contact = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between w-full h-full px-8 py-4 gap-6">
      {/* Left Panel */}
       <div className="flex-1 text-white">
        <h2 className="text-3xl font-bold mb-4">Hey there!</h2>
        <div className="w-14 h-1 bg-yellow-400 rounded-sm mb-6" />

        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          I'm always up for a good conversation — whether it's about teaming up
          on a project, exploring freelance work, or chatting about something
          exciting you have in mind. If you're reaching out with a collaboration,
          freelance gig, or even a potential role, feel free to drop me an email at <br />
          <a href="mailto:mukhejachirag22@gmail.com" className="underline font-semibold text-white hover:text-yellow-400">
            mukhejachirag22@gmail.com
          </a>
        </p>

        <p className="text-white font-semibold pt-3 mb-3">Or connect with me on the socials below</p>

        <div className="flex gap-4 mt-2">
          <a href="https://www.linkedin.com/in/chiragmukheja/" target="_blank" className="bg-[#2c2c2c] p-3 rounded-lg shadow-md hover:shadow-yellow-400/20">
            <img src="/icons/linkedin.svg" alt="LinkedIn" className="w-9 h-9" />
          </a>
          <a href="https://wa.me/919988774955" target="_blank" className="bg-[#2c2c2c] p-3 rounded-lg shadow-md hover:shadow-yellow-400/20">
            <img src="/icons/whatsapp.svg" alt="WhatsApp" className="w-9 h-9" />
          </a>
          <a href="https://github.com/chiragmukheja" target="_blank" className="bg-[#2c2c2c] p-3 rounded-lg shadow-md hover:shadow-yellow-400/20">
            <img src="/icons/github.svg" alt="GitHub" className="w-9 h-9" />
          </a>
          <a href="https://x.com/ChiragMukheja" target="_blank" className="bg-[#2c2c2c] p-3 rounded-lg shadow-md hover:shadow-yellow-400/20">
            <img src="/icons/twitter.svg" alt="Twitter" className="w-9 h-9" />
          </a>
        </div>
      </div>

      {/* Right Panel with Memoji */}
      <div className="w-[360px] h-[260px] lg:w-[580px] lg:h-[340px]">
        <Memoji />
      </div>
    </div>
  );
};

export default Contact;
