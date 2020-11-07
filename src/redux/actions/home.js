import ApiService from '../../api/ApiService';

const getAllPokemons = (offset, limit) => {
  console.log("inside getAllPokemons ===> ", offset, limit);
  return async (dispatch) => {
    try {
      const respAllPokemons = await ApiService.getAllPokemons(0, 10);
      console.log("respAllPokemos ===> ", respAllPokemons);
    }
    catch(e) {
    }
  };
}

export {
  getAllPokemons,
};