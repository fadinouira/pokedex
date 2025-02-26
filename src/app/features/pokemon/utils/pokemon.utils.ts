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
