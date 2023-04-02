import React from "react";
import { motion } from "framer-motion";

function NotFound() {
  return (
    <motion.div
      style={{ marginTop: "250px", marginBottom: "250px" }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1>🧛‍♀️  NotFound 🦐 </h1>
    </motion.div>
  );
}

export default NotFound;
