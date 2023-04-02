import React from "react";
import "../css/Cards.css";
import "../css/types.css";
import { motion } from "framer-motion";

function Card({ pokemon }) {
  return (
    <motion.div
      className="card"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="cardTop">
        <div className="imageContainer">
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </div>
        <p>#{pokemon.id}</p>
      </div>
      <div className="cardBottom">
        <p className="pokemonName">{pokemon.name}</p>
        <div className="pokemonType">
          {pokemon.types.map((type, idx) => (
            <div key={idx} className={type.type.name}>
              {type.type.name}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Card;
