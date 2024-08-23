import { AnimatePresence, motion } from "framer-motion";

const container = {
  hidden: {
    opacity: 1,
  },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.05,
    },
  },
};

const item = {
  hidden: {
    y: 20,
    opacity: 0,
    transition: {
      delay: 1,
    },
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.8,
    },
  },
  exit: {
    y: 20,
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const Menu = () => {
  return (
    <AnimatePresence>
      <motion.ul
        variants={container}
        initial="hidden"
        animate="visible"
        exit="hidden"
        className="flex items-start flex-col gap-3 px-5 py-4"
      >
        {["About", "Features", "Updates", "Customers", "Help"].map((index) => (
          <motion.li key={index} variants={item} className="text-white/60">
            {index}
          </motion.li>
        ))}
        <div className="mx-6">
          <motion.button
            variants={item}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="rounded-lg bg-white text-black h-[2.5rem] w-[7.5rem]"
          >
            Get For Free
          </motion.button>
        </div>
      </motion.ul>
    </AnimatePresence>
  );
};

export default Menu;
