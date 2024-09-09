import { FaArrowRight } from "react-icons/fa6";
import star from "../assets/star.webp";
import spring from "../assets/spring.webp";

const Signing = () => {
  return (
    <section className="flex items-center justify-center bg-gradient-to-t from-[#D3DDFF] to-[#fff] pb-20 py-20">
      <img src={star} alt={star} className="hidden md:block" />
      <div className="flex items-center justify-center flex-col gap-5">
        <p className="font-bold text-4xl text-black tracking-tight text-center text-transparent bg-clip-text bg-gradient-to-b from-black to-[#001e80]">
          Sign up for free today
        </p>
        <p className="text-xl text-black text-center mx-8">
          Celebrate the joy of accomplishment with an app
          <br /> designed to track your progress and motivate your
          <br /> efforts.
        </p>
        <div className="flex items-center gap-5">
          <button className="rounded-lg bg-black text-white h-[2.5rem] w-[7.5rem]">
            Get For Free
          </button>
          <button className="flex items-center justify-center gap-3 rounded-lg bg-white text-black h-[2.5rem] w-[8.5rem]">
            Learn More <FaArrowRight className="h-3 w-3" />
          </button>
        </div>
      </div>
      <img src={spring} alt={spring} className="hidden md:block" />
    </section>
  );
};

export default Signing;
