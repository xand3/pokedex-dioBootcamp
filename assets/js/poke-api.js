const PokeApi = {
  async getPokemons(offset = 0, limit = 10) {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
    try {
      const res = await fetch(url);
      const jsonBody = await res.json();
      return jsonBody.results;
    } catch (error) {
      return console.log(error);
    }
  }
};
