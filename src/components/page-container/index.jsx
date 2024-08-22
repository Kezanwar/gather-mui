import React from "react";
import { motion } from "framer-motion";

const initial = { opacity: 0 };
const animate = { opacity: 1 };

const PageContainer = ({ children }) => {
  return (
    <motion.main initial={initial} animate={animate}>
      {children}
    </motion.main>
  );
};

export default PageContainer;
