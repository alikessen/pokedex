import type { State } from "./state.js";

export async function commandCatch(
  state: State,
  ...args: string[]
): Promise<void> {
  const pokemonName = args[0];

  if (!pokemonName) {
    console.log("Please provide a Pokemon name.");
    return;
  }

  console.log(`Throwing a Pokeball at ${pokemonName}...`);

  const pokemon = await state.pokeAPI.fetchPokemon(pokemonName);

  const catchChance = 100 / pokemon.base_experience;

  if (Math.random() < catchChance) {
    state.pokedex[pokemon.name] = pokemon;
    console.log(`${pokemon.name} was caught!`);
  } else {
    console.log(`${pokemon.name} escaped!`);
  }
}