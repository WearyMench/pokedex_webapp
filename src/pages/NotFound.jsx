import React from "react";
import { motion } from "framer-motion";

function NotFound() {
  const styles = {
    marginTop: "250px",
    marginBottom: "250px",
  };
  return (
    <motion.div
      style={styles}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1>🧛‍♀️  NotFound 🦐 </h1>
    </motion.div>
  );
}

export default NotFound;
