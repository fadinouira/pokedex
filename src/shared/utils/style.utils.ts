import { ColorToken, FontToken, StyleTokenType } from '../types';

/**
 * Generates a CSS variable string for a given style token.
 *
 * @param tokenType - The type of the style token (e.g., color, font).
 * @param token - The specific token to generate the variable for (optional).
 * @returns A CSS variable string in the format `var(--{tokenType}-{token})`, or `undefined` if no token is provided.
 *
 * @example
 * ```ts
 * const colorVar = generateStyleToken('color', 'brand-primary');
 * console.log(colorVar); // Output: "var(--color-brand-primary)"
 * ```
 */
export const generateStyleToken = (
  tokenType: StyleTokenType,
  token?: ColorToken | FontToken,
): string | undefined => {
  return token ? `var(--${tokenType}-${token})` : undefined;
};
