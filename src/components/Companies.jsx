import React from "react";
import { motion } from "framer-motion";
import logo1 from "../assets/logoAcme.webp";
import logo2 from "../assets/logoApex.webp";
import logo3 from "../assets/logoCelestial.webp";
import logo4 from "../assets/logoEcho.webp";
import logo5 from "../assets/logoPulse.webp";
import logo6 from "../assets/logoQuantum.webp";

const logos = [
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
];

const Companies = () => {
  return (
    <div className="flex items-center justify-center overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)] z-50">
      <div className="container mx-auto">
        <div className="overflow-hidden py-10 flex items-center gap-14 pr-14 flex-none">
          <motion.div
            className="flex space-x-20"
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 10,
              ease: "linear",
            }}
            style={{ width: `${logos.length * 80}px` }}
          >
            {logos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Logo ${index + 1}`}
                className="h-8"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Companies;
