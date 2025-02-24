/**
 * Generates a random integer between the specified minimum and maximum values (inclusive).
 *
 * @param min - The minimum value (default: 0).
 * @param max - The maximum value (default: 1000).
 * @returns A random integer between `min` and `max`.
 *
 * @example
 * ```ts
 * const randomNum = generateRandomNumber(1, 1025);
 * console.log(randomNum); // Example output: 527
 * ```
 */
export const generateRandomNumber = (min: number = 0, max: number = 1000): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
