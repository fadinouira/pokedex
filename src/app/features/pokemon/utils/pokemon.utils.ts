import { ColorToken, generateRandomNumber } from '@/shared';

/**
 * Generates a random Pokémon ID between 1 and 1025.
 *
 * @returns A random Pokémon ID (integer between 1 and 1025).
 *
 * @example
 * ```ts
 * const pokemonId = generateRandomPokemonId();
 * console.log(pokemonId); // Example output: 152
 * ```
 */
export const generateRandomPokemonId = (): number => {
  return generateRandomNumber(1, 1025);
};

/**
 * Generates a CSS color token based on a Pokémon type.
 *
 * @param typeName - The name of the Pokémon type (e.g., "fire", "water", "grass").
 * @returns A ColorToken representing the color token of a given type.
 *
 * @example
 * ```ts
 * const token = generateColorTokenByTypeName("fire");
 * console.log(token); // "pokemon-fire"
 * ```
 */
export const generateColorTokenByTypeName = (typeName: string): ColorToken => {
  return `pokemon-${typeName}` as ColorToken;
};

/**
 * Transforms Pokémon stat names into a readable short format and ensures values are three-digit strings.
 *
 * @param stats - An object with Pokémon stats (keys as full names, values as numbers).
 * @returns An array of objects containing formatted stat names and values.
 *
 * @example
 * ```ts
 * const formattedStats = formatPokemonStats({
 *   hp: 140,
 *   attack: 85,
 *   defense: 95,
 *   'special-attack': 145,
 *   'special-defense': 95,
 *   speed: 130,
 * });
 * console.log(formattedStats);
 * ```
 */
export const formatPokemonStatsName = (name: string) => {
  const statMapping: Record<string, string> = {
    hp: 'HP',
    attack: 'ATK',
    defense: 'DEF',
    'special-attack': 'SATK',
    'special-defense': 'SDEF',
    speed: 'SPD',
  };

  return statMapping[name] || name.toUpperCase();
};
