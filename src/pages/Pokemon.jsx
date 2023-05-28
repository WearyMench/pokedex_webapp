import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

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
    };
    cargarPokemon();
  }, [id]);
  console.log(PokemonData.stats);
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
              to={`/Pokedex/${id === "1" ? "1010" : Number(id) - 1}`}
              className="PageChangeButtoms rightBorder"
            >
              Last Pokemon
            </Link>
            <Link
              to={`/Pokedex/${id === "1010" ? "1" : Number(id) + 1}`}
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
          <div className="stats">
            <h4>STATS:</h4>
            {/* <BarChart width={250} height={150} data={PokemonData.stats}>
              <XAxis dataKey="stat.name" />
              <Tooltip />
              <Bar dataKey="base_stat" fill="#8884d8" />
            </BarChart> */}
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart
                cx="50%"
                cy="50%"
                outerRadius="80%"
                data={PokemonData.stats}
              >
                <PolarGrid stroke="black" />
                <PolarAngleAxis dataKey="stat.name" stroke="black" />
                <PolarRadiusAxis stroke="black" />
                <Tooltip />
                <Radar dataKey="base_stat" fill="#8884d8" fillOpacity={0.6} />
              </RadarChart>
            </ResponsiveContainer>
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
