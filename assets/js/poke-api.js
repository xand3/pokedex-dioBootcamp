const PokeApi = {
  async getPokemonsDetails(pokemon) {
    const res = await fetch(pokemon.url);
    return await res.json();
  },

  async getPokemons(offset = 0, limit = 10) {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

    const res = await fetch(url);
    const jsonBody = await res.json();
    const pokemons = jsonBody.results;
    const detailsRequests = pokemons.map(PokeApi.getPokemonsDetails);
    const pokemonsDetails = await Promise.all(detailsRequests);
    console.log(pokemonsDetails);
    return pokemonsDetails;
  }
};
