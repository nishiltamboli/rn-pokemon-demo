import UtilService from '../services/UtilService';
import Api from './Api';

const ApiService = {

  async getAllPokemons(nextUrl) {
    let offset = 0;
    let limit = 10;
    if(nextUrl) {
      const allParams = UtilService.getAllUrlParams(nextUrl);
      offset = allParams.offset;
      limit = allParams.limit;
    }
    return await Api.get(`/v2/pokemon?offset=${offset}&limit=${limit}`);
  },

  async getPokemonDetails(url) {
    return await Api.get(`/${url.split('https://pokeapi.co/api/')[1]}`);
  },

};
export default ApiService;