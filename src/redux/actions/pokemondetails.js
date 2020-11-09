import ApiService from '../../api/ApiService';
import { GET_POKEMON_DETAILS_FAILED, GET_POKEMON_DETAILS_STARTED, GET_POKEMON_DETAILS_SUCCESS } from './actionTypes';

const getPokemonDetails = (url) => {
  return async (dispatch) => {
    try {
      dispatch({ type: GET_POKEMON_DETAILS_STARTED });
      const respPokemonDetails = await ApiService.getPokemonDetails(url);
      dispatch({ type: GET_POKEMON_DETAILS_SUCCESS, pokemonDetails: respPokemonDetails });
    }
    catch(e) {
      UtilService.toast('Failed to load pokemon details');
      dispatch({ type: GET_POKEMON_DETAILS_FAILED, isReset: reset });
    }
  };
}

export {
  getPokemonDetails,
};