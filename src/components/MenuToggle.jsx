import * as React from "react";
import { motion } from "framer-motion";

const Path = (props) => (
  <motion.path
    strokeWidth="3"
    stroke="hsl(0, 0%, 100%)"
    strokeLinecap="round"
    {...props}
  />
);

export const MenuToggle = ({ toggle }) => (
  <button onClick={toggle}>
    <svg width="23" height="23">
      <Path
        initial={{ d: "M 2 2.5 L 20 2.5" }}
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <Path
        initial={{ d: "M 2 16.346 L 20 16.346" }}
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
      />
    </svg>
  </button>
);
