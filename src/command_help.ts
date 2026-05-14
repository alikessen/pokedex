import { CLICommand } from "./command.js";

export function commandHelp(commands: Record<string, CLICommand>): void{
    console.log("Welcome to the Pokedex!");
    console.log("Usage:")
    console.log(" ");
    console.log("help: Displays a help message");
    console.log("exit: Exit the Pokedex");
}