import type { State } from "./state.js";

export async function commandExplore(state: State, ...args: string[]): Promise<void> {
  const locationName = args[0];

  if (!locationName) {
    console.log("Please provide a location area name.");
    return;
  }

  console.log(`Exploring ${locationName}...`);

  const location = await state.pokeAPI.fetchLocation(locationName);

  console.log("Found Pokemon:");

  for (const encounter of location.pokemon_encounters) {
    console.log(` - ${encounter.pokemon.name}`);
  }
}