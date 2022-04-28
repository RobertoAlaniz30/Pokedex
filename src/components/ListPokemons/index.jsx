import React from "react";
import Item from "./ItemPokemon";
import { Link } from "react-router-dom";

import "./styles.css";

const PokemonsContainer = ({ pokemons }) => {
  return (
    <div className="pokemons-main-container">
      {pokemons.map((pokemon, index) => {
        return (
          <Link to={`pokemon/${pokemon.id}`} className="link">
            <Item pokemon={pokemon} key={`pokemon-${index}`} />
          </Link>
        );
      })}
    </div>
  );
};

export default PokemonsContainer;
