import { commandExit } from "./command_exit.js";
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
    }
  };
}

export function startREPL(state: State) {

  state.rl.prompt();

  state.rl.on("line", (input: string) => {
    const words = cleanInput(input);

    if (words.length === 0) {
      state.rl.prompt();
      return;
    }

    const commands = getCommands();
    const commandName = words[0];
    const command = state.commands[commandName];

    if (!command) {
      console.log("Unknown command");
      state.rl.prompt();
      return;
    }

    try {
      command.callback(state);
    } catch (error) {
      console.log(error);
    }

    state.rl.prompt();
  });
}