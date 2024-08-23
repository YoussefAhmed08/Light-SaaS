import { GrStatusGood } from "react-icons/gr";
import { pricing } from "../constants";
import { motion } from "framer-motion";

const Pricing = () => {
  return (
    <section className="flex-col flex items-center justify-center gap-10 pt-56 pb-20 py-20">
      <div className="flex items-center justify-center flex-col gap-5">
        <span className="border border-slate-400 rounded-lg px-3 py-1 text-sm tracking-tight">
          Pay less money
        </span>
        <p className="font-bold text-5xl text-black tracking-tight text-center">
          Less money but
          <p className="font-bold text-5xl text-black tracking-tight text-center text-transparent bg-clip-text bg-gradient-to-b from-black to-[#001e80]">
            professional service
          </p>
        </p>
        <p className="text-xl text-black text-center">
          Choose a plan that fits your needs and unlock all the
          <br /> features to build your ideal no-code SaaS website
          <br /> effortlessly.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-center gap-6 items-center mt-10 w-screen">
        {pricing.map((item, index) => {
          const isEven = index % 2 === 0;
          const color = isEven ? "white" : "black";
          const generalColor = isEven ? "black" : "white";
          return (
            <div
              key={item.id}
              className={`flex items-start justify-center flex-col gap-2 bg-black bg-${color} p-10 max-w-xs w-full rounded-3xl shadow-[0_7px_14px_#eaeaea]`}
            >
              <div className="flex items-center justify-evenly gap-36">
                <p className={`text-${generalColor}/60 text-lg font-bold`}>
                  {item.title}
                </p>
                <motion.span
                  className={`${
                    isEven ? "hidden" : "block"
                  } font-bold border border-slate-500 rounded-lg px-3 py-1 text-sm tracking-tight bg-[linear-gradient(to_right,#dd7ddf,#e1cd86,#bbcb92,#71c2ef,#3bffff,#dd7ddf,#e1cd86,#bbcb92,#71c2ef,#3bffff)] [background-size:200%] text-transparent bg-clip-text`}
                  animate={{ backgroundPosition: ["0% 50%", "100% 50%"] }}
                  transition={{
                    duration: 2,
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                >
                  Popular
                </motion.span>
              </div>
              <p
                className={`text-${generalColor} text-4xl font-bold font-sans tracking-tighter leading-none`}
              >
                ${item.price}{" "}
                <span className="tracking-tight text-xl font-bold text-black/50">
                  /month
                </span>
              </p>
              <button
                className={`capitalize w-full mt-[30px] self-center tracking-tight bg-${generalColor} text-${color} py-2 px-4 rounded-lg cursor-pointer`}
              >
                {item.buttonTitle}
              </button>
              <ul className="flex flex-col gap-5 mt-8">
                {item.features.map((feature) => {
                  return (
                    <li
                      key={feature}
                      className="text-sm flex items-center gap-4"
                    >
                      <GrStatusGood className={`text-${generalColor}`} />
                      <p className={`text-${generalColor}`}>{feature}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Pricing;
