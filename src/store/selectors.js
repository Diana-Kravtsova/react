export const selectPokemonCount = state => state.pokemon.info.length;

export const selectPokemon = (pokemonId) => {
    return (state) => state.pokemon.info.find(({ id }) => id === pokemonId);
};

export const selectReadonly = () => {
    return state => state.pokemon.readonly;
};
