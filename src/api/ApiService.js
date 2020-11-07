import Api from './Api';

const ApiService = {

  async getAllPokemons(offset, limit) {
    return await Api.get(`/v2/pokemon?offset=${offset}&limit=${limit}`);
  },

};
export default ApiService;