function convertPokemonToLi(pokemon) {
  return `
    <li class="pokemon">
      <span class="number">#001</span>
      <span class="name">${pokemon.name}</span>
      
      <div class="detail">
        <ol class="types">
          <li class="type">grass</li>
          <li class="type">poison</li>
        </ol>
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="${pokemon.name}">
      </div>
    </li>
  `;
}

const pokemonList = document.querySelector("#pokemonList");

PokeApi.getPokemons().then((pokemons) => {
  const listPokemons = pokemons.map((pokemon) => convertPokemonToLi(pokemon));

  pokemonList.innerHTML += listPokemons.join("");
});
