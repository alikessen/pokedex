import { Cache } from "./pokecache.js";

export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";
  private cache = new Cache(1000 * 60 * 5); // 5 minutes

  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
    const url = pageURL || `${PokeAPI.baseURL}/location-area?limit=20`;

    const cached = this.cache.get<ShallowLocations>(url);

    if (cached !== undefined) {
      console.log("Using cached location data");
      return cached;
    }

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Failed to fetch locations: ${response.status}`);
    }

    const data = (await response.json()) as ShallowLocations;

    this.cache.add(url, data);

    return data;
  }

  async fetchLocation(locationName: string): Promise<Location> {
    const url = `${PokeAPI.baseURL}/location-area/${locationName}`;

    const cached = this.cache.get<Location>(url);

    if (cached !== undefined) {
      console.log("Using cached location data");
      return cached;
    }

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Failed to fetch location: ${response.status}`);
    }

    const data = (await response.json()) as Location;

    this.cache.add(url, data);

    return data;
  }
}

export type ShallowLocations = {
  count: number;
  next: string | null;
  previous: string | null;
  results: {
    name: string;
    url: string;
  }[];
};

export type Location = {
  id: number;
  name: string;
  pokemon_encounters: {
    pokemon: {
      name: string;
      url: string;
    };
  }[];
};