import { GET_ALL_POKEMONS_FAILED, GET_ALL_POKEMONS_STARTED, GET_ALL_POKEMONS_SUCCESS } from '../actions/actionTypes';
const initialState = {
  allPokemons: [],
  offset: 0,
  limit: 20,
  nextUrl: 'FIRST',
  isGetAllPokemonLoading: false,
};

const home = (state = initialState, action) => {
  switch(action.type) {

  case GET_ALL_POKEMONS_STARTED:
    return { ...state, isGetAllPokemonLoading: true, nextUrl: action.isReset ? 'FIRST' : state.nextUrl };

  case GET_ALL_POKEMONS_SUCCESS:
    return { ...state, allPokemons: state.nextUrl==='FIRST' ? action.allPokemons : [ ...state.allPokemons, ...action.allPokemons ], nextUrl: action.nextUrl, isGetAllPokemonLoading: false };

  case GET_ALL_POKEMONS_FAILED:
    return { ...state, isGetAllPokemonLoading: false, allPokemons: [] };

  default:
    return state;
  }
};

export default home;