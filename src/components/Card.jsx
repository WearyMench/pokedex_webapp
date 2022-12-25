import React from "react";

function Card({ pokemon }) {
  return (
    <div className="card">
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
            <div key={idx}>{type.type.name}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card;
