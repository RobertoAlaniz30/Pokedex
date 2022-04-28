import React from "react";

const Item = ({ pokemon }) => {
  return (
    <article className="pokemon-item">
      <div className="imgPokemon-container">
        <img src={pokemon.sprites.front_default} alt="aqui va la imagen" />
      </div>
      <div className="pokemon-title">
        <h2>{pokemon.name}</h2>
      </div>
    </article>
  );
};

export default Item;
