import { motion } from "framer-motion";
import FeedbackElement from "./design/FeedbackElement";
import avatar1 from "../assets/avatar-1.webp";
import avatar2 from "../assets/avatar-2.webp";
import avatar3 from "../assets/avatar-3.webp";
import avatar4 from "../assets/avatar-4.webp";
import avatar5 from "../assets/avatar-5.webp";
import avatar6 from "../assets/avatar-6.webp";

const Feedback = () => {
  return (
    <section className="flex-col flex items-center justify-center gap-10 pt-56 pb-20 py-20">
      <div className="flex items-center justify-center flex-col gap-5">
        <span className="border border-slate-400 rounded-lg px-3 py-1 text-sm tracking-tight w-[7rem] text-center">
          Testimonials
        </span>
        <p className="font-bold text-4xl text-black tracking-tight text-center text-transparent bg-clip-text bg-gradient-to-b from-black to-[#001e80]">
          What our users say
        </p>
        <p className="text-xl text-black text-center mx-8">
          From intuitive design to powerful features, our app has
          <br /> become an essential tool for users around the world.
        </p>
      </div>
      <div className="flex justify-center items-center gap-6 pb-6 mt-10 max-h-[400px] overflow-hidden  [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]">
        <motion.div
          className="flex items-center justify-center gap-3 flex-col"
          initial={{ y: 0 }}
          animate={{ y: "-50%" }}
          transition={{
            duration: 10,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          <FeedbackElement
            img={avatar1}
            name="Jamie Rivera"
            userName="jamietechguru00"
            text="As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention."
          />
          <FeedbackElement
            img={avatar2}
            name="Josh Smith"
            userName="jjsmith"
            text="Our team's productivity has skyrocketed since we started using this tool. "
          />
          <FeedbackElement
            img={avatar3}
            name="Morgan Lee"
            userName="morganleewhiz"
            text="This app has completely transformed how I manage my projects and deadlines."
          />
          <FeedbackElement
            img={avatar1}
            name="Jamie Rivera"
            userName="jamietechguru00"
            text="As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention."
          />
          <FeedbackElement
            img={avatar2}
            name="Josh Smith"
            userName="jsmith"
            text="Our team's productivity has skyrocketed since we started using this tool."
          />
          <FeedbackElement
            img={avatar3}
            name="Morgan Lee"
            userName="morganleewhiz"
            text="This app has completely transformed how I manage my projects and deadlines."
          />
        </motion.div>
        <motion.div
          className="hidden md:flex items-center justify-center gap-3 flex-col"
          initial={{ y: 0 }}
          animate={{ y: "-50%" }}
          transition={{
            duration: 12,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          <FeedbackElement
            img={avatar4}
            name="Casey Jordan"
            userName="caseyj"
            text="I was amazed at how quickly we were able to integrate this app into our workflow."
          />
          <FeedbackElement
            img={avatar5}
            name="Taylor Kim"
            userName="taylorkimm"
            text="Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks."
          />
          <FeedbackElement
            img={avatar6}
            name="Riley Smith"
            userName="rileysmith1"
            text="The customizability and integration capabilities of this app are top-notch."
          />
          <FeedbackElement
            img={avatar4}
            name="Casey Jordan"
            userName="caseyj"
            text="I was amazed at how quickly we were able to integrate this app into our workflow."
          />
          <FeedbackElement
            img={avatar5}
            name="Taylor Kim"
            userName="taylorkimm"
            text="Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks."
          />
          <FeedbackElement
            img={avatar6}
            name="Riley Smith"
            userName="rileysmith1"
            text="The customizability and integration capabilities of this app are top-notch."
          />
        </motion.div>
        <motion.div
          className="hidden lg:flex items-center justify-center gap-3 flex-col"
          initial={{ y: 0 }}
          animate={{ y: "-50%" }}
          transition={{
            duration: 14,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          <FeedbackElement
            img={avatar2}
            name="Josh Smith"
            userName="jsmith"
            text="Our team's productivity has skyrocketed since we started using this tool. "
          />
          <FeedbackElement
            img={avatar4}
            name="Casey Jordan"
            userName="caseyj"
            text="I was amazed at how quickly we were able to integrate this app into our workflow."
          />
          <FeedbackElement
            img={avatar6}
            name="Riley Smith"
            userName="rileysmith1"
            text="The customizability and integration capabilities of this app are top-notch."
          />
          <FeedbackElement
            img={avatar2}
            name="Josh Smith"
            userName="jsmith"
            text="Our team's productivity has skyrocketed since we started using this tool. "
          />
          <FeedbackElement
            img={avatar4}
            name="Casey Jordan"
            userName="caseyj"
            text="I was amazed at how quickly we were able to integrate this app into our workflow."
          />
          <FeedbackElement
            img={avatar6}
            name="Riley Smith"
            userName="rileysmith1"
            text="The customizability and integration capabilities of this app are top-notch."
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Feedback;
