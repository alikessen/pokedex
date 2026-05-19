import { commandExit } from "./command_exit.js";
import { commandExplore } from "./command_explore.js";
import { commandHelp } from "./command_help.js";
import { commandMap } from "./command_map.js";
import { commandMapb } from "./command_mapb.js";
import type { CLICommand, State } from "./state.js";


export function cleanInput(input: string): string[] {
    return input
    .toLowerCase()
    .trim()
    .split(" ")
    .filter((word) => word !== "");
}

export function getCommands(): Record<string, CLICommand> {
  return {
    exit: {
        name: "exit",
        description: "Exits the pokedex",
        callback: commandExit,
    },
    help: {
        name: "help",
        description: "Displays a help message",
        callback: commandHelp,
    },
    map: {
      name: "map",
      description: "Displays the next 20 Pokemon location areas",
      callback: commandMap,
    },
    mapb: {
      name: "mapb",
      description: "Displays the previous 20 Pokemon location areas",
      callback: commandMapb,
    },
    explore: {
      name: "explore",
      description: "Explore a location area",
      callback: commandExplore,
    }
  };
}

export function startREPL(state: State) {

  state.rl.prompt();

  state.rl.on("line", async (input: string) => {
    const words = cleanInput(input);

    if (words.length === 0) {
      state.rl.prompt();
      return;
    }

    const commandName = words[0];
    const args = words.slice(1);
    const command = state.commands[commandName];

    if (!command) {
      console.log("Unknown command");
      state.rl.prompt();
      return;
    }

    try {
      await command.callback(state, ...args);
    } catch (error) {
      console.log(error);
    }

    state.rl.prompt();
  });
}