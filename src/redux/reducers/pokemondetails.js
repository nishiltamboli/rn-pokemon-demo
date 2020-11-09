import { GET_POKEMON_DETAILS_FAILED, GET_POKEMON_DETAILS_STARTED, GET_POKEMON_DETAILS_SUCCESS } from "../actions/actionTypes";

const initialState = {
  pokemonDetails: null,
  isGetPokemonDetailsLoading: false,
};

const pokemondetails = (state = initialState, action) => {
  switch(action.type) {

    case GET_POKEMON_DETAILS_STARTED:
      return { ...state, isGetPokemonDetailsLoading: true };

    case GET_POKEMON_DETAILS_SUCCESS:
      return { ...state, pokemonDetails: action.pokemonDetails, isGetPokemonDetailsLoading: false };

    case GET_POKEMON_DETAILS_FAILED:
      return { ...state, isGetPokemonDetailsLoading: false, pokemonDetails: null };

    default:
      return state;
  }
}

export default pokemondetails;