# Pokedex CLI

A TypeScript command-line Pokedex application built with Node.js.  
The app uses the PokeAPI to explore Pokemon location areas, discover Pokemon, catch them, inspect caught Pokemon and view your personal Pokedex.

## Features

- Interactive REPL command-line interface
- Explore Pokemon location areas
- Navigate location pages with `map` and `mapb`
- Fetch data from the PokeAPI
- Cache API responses for faster repeated requests
- Catch Pokemon using a chance-based system
- Store caught Pokemon in the user's Pokedex
- Inspect caught Pokemon details including stats and types

## Commands

| Command | Description |
|---|---|
| `help` | Displays available commands |
| `map` | Shows the next 20 Pokemon location areas |
| `mapb` | Shows the previous 20 Pokemon location areas |
| `explore <location-area>` | Shows Pokemon available in a location area |
| `catch <pokemon>` | Attempts to catch a Pokemon |
| `inspect <pokemon>` | Shows details of a caught Pokemon |
| `pokedex` | Lists all caught Pokemon |
| `exit` | Exits the Pokedex |

## Example Usage

```bash
npm run dev
