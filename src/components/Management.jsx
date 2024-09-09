import { useRef, useState } from "react";
import { motion, useDragControls, useMotionValue } from "framer-motion";
import puzzle from "../assets/puzzle.webp";
import square from "../assets/square.webp";

const Management = () => {
  const controls = useDragControls();

  return (
    <section className="flex-col flex items-center justify-center gap-10 pt-56 bg-gradient-to-t from-[#D3DDFF] to-[#fff] pb-20 py-20">
      <div className="container mx-auto">
        <div className="flex items-center justify-center flex-col gap-5">
          <span className="border border-slate-400 rounded-lg px-3 py-1 text-sm tracking-tight w-[10rem] text-center">
            Everything you need
          </span>
          <div className="font-bold text-4xl text-black tracking-tight text-center px-1">
            Streamlined for easy
            <p className="font-bold text-4xl text-black tracking-tight text-center text-transparent bg-clip-text bg-gradient-to-b from-black to-[#001e80]">
              management
            </p>
          </div>
          <div className="text-xl text-black text-center">
            Enjoy customizable lists, team work tools, and smart
            <br /> tracking all in one place. Set tasks, get reminders, and
            <br /> see your progress simply and quickly.
          </div>
        </div>
        <div className="flex items-center justify-center gap-5 flex-col md:flex-row mt-10  mx-5">
          <div className="bg-white/70 drop-shadow-2xl rounded-lg p-10 flex items-center justify-center flex-col gap-3">
            <motion.div
              animate={{ y: [0, 30, 0] }}
              initial={{ y: 0 }}
              transition={{
                duration: 3,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              <motion.img
                src={puzzle}
                alt="puzzle"
                width={500}
                height={500}
                drag
                dragConstraints={{
                  top: -15,
                  left: -15,
                  right: 15,
                  bottom: 15,
                }}
                style={{ touchAction: "none" }}
              />
            </motion.div>
            <p className="font-sans font-semibold text-xl">
              Integration ecosystem
            </p>
            <p className="font-sans text-sm text-center">
              Enhance your productivity by connecting with
              <br /> your favorite tools, keeping all your essentials in
              <br /> one place.
            </p>
          </div>
          <div className="bg-white/70 drop-shadow-2xl rounded-lg p-10 flex items-center justify-center flex-col gap-3">
            <motion.div
              animate={{ y: [0, 30, 0] }}
              initial={{ y: 0 }}
              transition={{
                duration: 3,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              <motion.img
                src={square}
                alt="square"
                width={500}
                height={500}
                drag
                dragConstraints={{
                  top: -15,
                  left: -15,
                  right: 15,
                  bottom: 15,
                }}
                style={{ touchAction: "none" }}
                onDragExit={() => {
                  y: 0;
                }}
              />
            </motion.div>
            <p className="font-sans font-semibold text-xl">
              Goal setting and tracking
            </p>
            <p className="font-sans text-sm text-center">
              Define and track your goals, breaking down
              <br /> objectives into achievable tasks to keep your
              <br /> targets in sight.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Management;
