import axios from "axios";
import { api } from "../../api/api";

export const setPokemons = (payload) => ({
  type: "SET_POKEMONS",
  payload: payload,
});
export const filterPokemon = (payload) => ({
  type: "FILTER_POKEMON",
  payload: payload,
});

export const setDetails = () => {
  return (dispatch) => {
    api()
      .then((res) => {
        const pokemonList = res.results;
        return Promise.all(
          pokemonList.map((pokemon) => axios.get(pokemon.url))
        );
      })
      .then((pokemonResponses) => {
        const pokemonsWithDetails = pokemonResponses.map(
          (response) => response.data
        );
        dispatch(setPokemons(pokemonsWithDetails));
      })
      .catch((error) => {
        console.log("Error");
      });
  };
};
