import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { PiLeaf } from "react-icons/pi";
import { MdLockOutline } from "react-icons/md";
import { MdOutlineNotifications } from "react-icons/md";
import { GoGoal } from "react-icons/go";
import pyramid from "../assets/pyramid.webp";
import tube from "../assets/tube.webp";
import productImage from "../assets/productImage.webp";
import Benefits from "./design/Benefits";

const Services = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end 100%"],
  });
  const isMobile = window.innerWidth < 768;
  const opacity = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? [0.7, 1] : [0.5, 1]
  );
  const rotateX = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? ["15deg", "0deg"] : ["15deg", "0deg"]
  );
  const moveWhileScroll = useTransform(scrollYProgress, [0, 1], [150, -200]);

  return (
    <div className="flex-col flex items-center justify-center gap-10 pt-32 bg-gradient-to-t from-[#D3DDFF] to-[#fff] pb-20 py-5 md:py-10">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-5">
          <span className="border border-slate-400 rounded-lg px-3 py-1 text-sm tracking-tight w-[10.5rem] text-center">
            Boost your productivity
          </span>
          <div className="font-bold text-5xl text-black tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-black to-[#001e80] text-center">
            A more effective to
            <span className="font-bold text-5xl text-black tracking-tight text-center bg-gradient-to-b from-black to-[#001e80] text-transparent bg-clip-text">
              track progress
            </span>
          </div>
          <p className="text-xl text-black text-center px-2">
            Effortlessly turn your ideas into a fully functional,
            <br /> responsive, no-code SaaS website in just minutes with
            <br /> the set of free components for Framer.
          </p>
        </div>
        <div className="perspective-1000 relative mb-8">
          <motion.img
            ref={targetRef}
            src={pyramid}
            alt="pyramid"
            className="absolute right-0 z-10 hidden md:block"
            width={300}
            height={300}
            style={{ y: moveWhileScroll }}
            initial={{ y: 0 }}
          />
          <motion.img
            ref={targetRef}
            src={productImage}
            alt="productImage"
            width={1200}
            style={{ opacity: opacity, rotateX: rotateX }}
            className="z-50 mx-auto"
          />
          <motion.img
            ref={targetRef}
            src={tube}
            alt="tube"
            width={300}
            height={300}
            style={{ y: moveWhileScroll }}
            initial={{ y: 0 }}
            className="absolute -left-[3rem] -bottom-36 z-10 hidden md:block"
          />
        </div>
        <div className="flex items-center justify-center flex-wrap gap-8 sm:flex-col md:flex-row">
          <Benefits
            icon={<PiLeaf size={26} />}
            title="Integration ecosystem"
            description="Track your progress and motivate your efforts everyday."
          />
          <Benefits
            icon={<GoGoal size={26} />}
            title="Goal setting and tracking"
            description="Set and track your goals with manageable task breakdowns."
          />
          <Benefits
            icon={<MdLockOutline size={26} />}
            title="Secure data encryption"
            description="Ensure your data's safety with top-tier encryption."
          />
          <Benefits
            icon={<MdOutlineNotifications size={26} />}
            title="Customizable notifications"
            description="Get alerts no tasks and deadlines that matter most."
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
