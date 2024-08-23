import { AnimatePresence, motion, useCycle } from "framer-motion";
import logosaas from "../assets/logosaas.webp";
import Menu from "./Menu";
import { MenuToggle } from "./MenuToggle";

const Header = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.05,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const menu = {
    open: {
      width: 200,
      height: 250,
      top: 0,
      borderRadius: 25,
      transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
    },
    closed: {
      width: 45,
      height: 45,
      borderRadius: 25,
      top: 0,
      right: 0,
      transition: {
        duration: 0.75,
        delay: 0.35,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  const button = {
    open: {
      right: 20,
      top: 20,
    },
    closed: {
      right: 10,
      transition: {
        duration: 0.55,
        delay: 0.6,
      },
    },
  };

  return (
    <header className="py-5 overflow-x-clip px-3 sm:px-5 md:px-10 xl:px-20 fixed top-0 w-full backdrop-blur-sm z-[101]">
      <nav className="container mx-auto">
        <div className="w-full flex justify-between items-center relative">
          <img src={logosaas} alt="logosaas" className="h-12" />
          <motion.ul
            className="hidden md:flex items-center gap-5 text-[#80828A]"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {["About", "Features", "Updates", "Customers", "Help"].map(
              (index) => (
                <motion.li key={index} variants={item}>
                  {index}
                </motion.li>
              )
            )}
            <motion.button
              className="rounded-lg bg-black text-white h-[2.5rem] w-[7.5rem] item"
              variants={item}
            >
              Get For Free
            </motion.button>
          </motion.ul>
          {/* <div className="relative block md:hidden">
            <button
              onClick={toggleNavigation}
              className="z-100 flex flex-col items-center justify-center gap-1 size-10 bg-black rounded-full md:hidden text-white"
            >
              Menu
            </button>
            <div
              variants={menu}
              animate={`${isActive ? "open" : "closed"}`}
              initial="closed"
            >
              <AnimatePresence>
                {isActive && <Menu isActive={isActive} />}
              </AnimatePresence>
            </div>
          </div> */}
          <motion.div
            className="cursor-pointer w-fit h-fit bg-black md:hidden absolute flex items-center justify-center pt-3"
            variants={menu}
            animate={isOpen ? "open" : "closed"}
            initial="closed"
          >
            <motion.div
              variants={button}
              animate={isOpen ? "open" : "closed"}
              className="absolute top-3"
            >
              <MenuToggle toggle={() => toggleOpen()} />
            </motion.div>

            <AnimatePresence>{isOpen && <Menu />}</AnimatePresence>
          </motion.div>
          {/* <span onClick={toggleNavigation}>{isActive && <Sidebar />}</span> */}
        </div>
      </nav>
    </header>
  );
};

export default Header;
