import axios from "axios";

const URL = "https://raw.githubusercontent.com/BrunnerLivio/PokemonDataGraber/master/output.json";

export async function getPokemons() {
    return (await axios.get(URL)).data.slice(0, 15);
}
