function convertPokeApiDetailToPokemon(pokeDetail) {
  const pokemon = new Pokemon()
  pokemon.number = pokeDetail.order
  pokemon.name = pokeDetail.name

  const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
  const [type] = types

  pokemon.types = types
  pokemon.type = type
  pokemon.photo = pokeDetail.sprites.other.dream_world.front_default

  return pokemon;
}

const PokeApi = {
  async getPokemonsDetails(pokemon) {
    const res = (await fetch(pokemon.url));
    const pokemons = await res.json();

    return convertPokeApiDetailToPokemon(pokemons);
  },

  async getPokemons(offset = 0, limit = 10) {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

    const res = await fetch(url);
    const jsonBody = await res.json();
    const pokemons = jsonBody.results;

    const detailsRequests = pokemons.map(PokeApi.getPokemonsDetails);
    const pokemonsDetails = await Promise.all(detailsRequests);

    return pokemonsDetails;
  }
};
