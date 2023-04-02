import React from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

import "../css/Pokemon.css";

function Pokemon() {
  const { id } = useParams();
  return (
    <motion.div
      style={{ marginTop: "250px", marginBottom: "250px" }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Pokemon {id}</h1>
      <Link to={"/"} className="returnButton">
        Return to the Pokedex
      </Link>
    </motion.div>
  );
}

export default Pokemon;
