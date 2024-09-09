import { FaArrowRight } from "react-icons/fa6";

const Benefits = ({ icon, title, description }) => {
  return (
    <div className="flex items-start justify-center flex-col pl-10 gap-5 border-2 border-slate-400 rounded-xl py-5 w-[18rem]">
      <span>{icon}</span>
      <p className="font-sans font-semibold">{title}</p>
      <p className="font-sans">{description}</p>
      <button className="flex items-center justify-center gap-3 rounded-lg text-black h-[2.5rem] font-sans">
        Learn More <FaArrowRight className="h-3 w-3" />
      </button>
    </div>
  );
};

export default Benefits;
