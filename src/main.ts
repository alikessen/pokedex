import { startREPL } from "./repl.js";
import { initState } from "./state.js";

function main() {
    const stateObj = initState();
    startREPL(stateObj);
}

main();