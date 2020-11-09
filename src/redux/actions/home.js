import ApiService from '../../api/ApiService';
import UtilService from '../../services/UtilService';
import { GET_ALL_POKEMONS_FAILED, GET_ALL_POKEMONS_STARTED, GET_ALL_POKEMONS_SUCCESS } from './actionTypes';

const getAllPokemons = (nextUrl, reset) => {
  return async (dispatch) => {
    try {
      dispatch({ type: GET_ALL_POKEMONS_STARTED, isReset: reset });
      const respAllPokemons = await ApiService.getAllPokemons(nextUrl);
      dispatch({ type: GET_ALL_POKEMONS_SUCCESS, allPokemons: respAllPokemons.results, nextUrl: respAllPokemons.next });
    }
    catch(e) {
      UtilService.toast('Failed to load all pokemons');
      dispatch({ type: GET_ALL_POKEMONS_FAILED, isReset: reset });
    }
  };
};

export {
  getAllPokemons,
};