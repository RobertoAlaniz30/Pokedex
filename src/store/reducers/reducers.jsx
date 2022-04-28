const initialState = {
  pokemonsList: [],
  filterList: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_POKEMONS":
      return { ...state, pokemonsList: action.payload };

    case "FILTER_POKEMON":
      let list;
      list = state.pokemonsList.filter((a) => {
        return a.name.toLowerCase().includes(action.payload.toLowerCase());
      });

      return {
        ...state,
        filterList: list,
      };
    default:
      return { ...state };
  }
};

export default reducer;
