import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import cog from "../assets/cog.webp";
import cylinder from "../assets/cylinder.png";
import noodle from "../assets/noodle.webp";

const Hero = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });
  const moveWhileScroll = useTransform(scrollYProgress, [0, 1], [180, -50]);

  return (
    <section className="relative z-50 bg-gradient-to-t from-[#183ec2] to-[#fff]">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center ml-5 md:ml-0 md:gap-28 lg:gap-96 py-14 mt-16">
          {/* LEFT SECTION */}
          <div className="flex items-start justify-center flex-col gap-5 xl:ml-10">
            <span className="border border-slate-400 rounded-lg px-3 py-1 text-sm tracking-tight w-[9rem] text-center">
              Version 2.0 is here
            </span>
            <h3 className="font-bold text-4xl text-black tracking-tight">
              Pathway to <br />{" "}
              <p className="text-transparent bg-clip-text bg-gradient-to-b from-black to-[#001e80]">
                productivity
              </p>
            </h3>
            <p className="text-xl text-black tracking-tight mr-8">
              Celebrate the joy of accomplishment with an app <br /> designed to
              track your progress, motivate your efforts, <br /> and celebrate
              your successes.
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
          {/* RIGHT SECTION */}
          <div className="relative mr-10 w-80 sm:mr-0 md:w-max">
            <motion.img
              ref={targetRef}
              style={{ y: moveWhileScroll }}
              src={cylinder}
              alt="cylinder"
              className="absolute -left-36 hidden md:block"
              width={200}
              height={200}
            />
            <motion.img
              src={cog}
              alt="cog"
              width={650}
              height={650}
              animate={{ y: [0, 50, 0] }}
              transition={{
                duration: 3,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop",
              }}
            />
            <motion.img
              ref={targetRef}
              style={{ y: moveWhileScroll }}
              src={noodle}
              alt="noodle"
              className="absolute top-[70%] -right-24 hidden md:block z-100"
              width={200}
              height={200}
              initial={{ y: 0 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
