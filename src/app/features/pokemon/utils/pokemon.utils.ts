import { generateRandomNumber } from '@/shared';

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
 * @returns A string representing the color token of a given type.
 *
 * @example
 * ```ts
 * const token = generateColorTokenByTypeName("fire");
 * console.log(token); // "pokemon-fire"
 * ```
 */
export const generateColorTokenByTypeName = (typeName: string) => `pokemon-${typeName}`;
