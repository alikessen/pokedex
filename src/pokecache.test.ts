import { describe, expect, test } from "vitest";
import { Cache } from "./pokecache.js";

describe("Cache", () => {
  test("adds and gets a value", () => {
    const cache = new Cache(1000);

    cache.add("pikachu", "electric");

    const result = cache.get<string>("pikachu");

    expect(result).toBe("electric");

    cache.stopReapLoop();
  });

  test("returns undefined for missing value", () => {
    const cache = new Cache(1000);

    const result = cache.get<string>("missing");

    expect(result).toBeUndefined();

    cache.stopReapLoop();
  });
});