import React, { useEffect } from "react";
import PokemonContainer from "../components/ListPokemons";
import { useDispatch, useSelector } from "react-redux";
import { setDetails } from "../store/actions/index";
import { api } from "../api/api";
import Input from "../components/InputFilter/Input";
import "./styles.css";

const Home = () => {
  const dispatch = useDispatch();
  const pokemonList = useSelector((state) => state.pokemonsList);
  const filterList = useSelector((state) => state.filterList);

  useEffect(() => {
    api().then(() => dispatch(setDetails()));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  let list1;

  if (filterList.length > 0) {
    list1 = filterList;
  } else {
    list1 = pokemonList;
  }

  return (
    <main className="Home">
      <section className="filter-section">
        <Input />
      </section>
      <section>
        <PokemonContainer pokemons={list1} />
      </section>
    </main>
  );
};

export default Home;
