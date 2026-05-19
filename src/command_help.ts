import type { State } from "./state.js";

export async function commandHelp(state: State): Promise<void>{
    console.log("Welcome to the Pokedex!");
    console.log("Usage:")
    console.log(" ");
    console.log("help: Displays a help message");
    console.log("exit: Exit the Pokedex");
}