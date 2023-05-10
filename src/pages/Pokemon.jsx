import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

import Loader from "../components/Loader";

import "../css/Pokemon.css";

function Pokemon() {
  const [PokemonData, setPokemonData] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const cargarPokemon = async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await response.json();
      setPokemonData(data);
      setLoaded(true);
      console.log(data);
    };
    cargarPokemon();
  }, [id]);

  return (
    <>
      {loaded ? (
        <motion.div
          className="container"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="Next-Last">
            <Link
              to={`/Pokedex/${id === "1" ? "1008" : Number(id) - 1}`}
              className="PageChangeButtoms rightBorder"
            >
              Last Pokemon
            </Link>
            <Link
              to={`/Pokedex/${id === "1008" ? "1" : Number(id) + 1}`}
              className="PageChangeButtoms"
            >
              Next Pokemon
            </Link>
          </div>
          <h1>
            {PokemonData.name} N.° {PokemonData.id}
          </h1>
          <div className="principal_div">
            <img
              src={PokemonData.sprites.front_default}
              alt={PokemonData.name}
            />
            <div className="types">
              Types:
              {PokemonData.types.map((type, idx) => (
                <div key={idx} className={type.type.name}>
                  {type.type.name}
                </div>
              ))}
            </div>
          </div>
          <div className="summary">
            <h2>Summary</h2>
            <p>
              Height: <span className="color">{PokemonData.height / 10} m</span>
            </p>
            <p>
              Weight:{" "}
              <span className="color">{PokemonData.weight / 10} kg</span>
            </p>
            <div className="AbilityDiv">
              <h4>Abilities:</h4>
              {PokemonData.abilities.map((ability, idx) => (
                <p key={idx} className={ability.ability.name}>
                  {ability.ability.name}
                </p>
              ))}
            </div>
          </div>
          <h4>Stats:</h4>
          <div className="stats">
            {PokemonData.stats.map((stat, idx) => (
              <div key={idx} className="stat">
                {stat.stat.name} :{" "}
                <span className="color">{stat.base_stat}</span>
              </div>
            ))}
          </div>
          <Link to={"/"} className="returnButton">
            Return to the Pokedex
          </Link>
        </motion.div>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default Pokemon;
