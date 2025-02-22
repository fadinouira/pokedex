import { ColorToken, StyleTokenType } from '../types';

export const generateStyleToken = (
  tokenType: StyleTokenType,
  token?: ColorToken,
): string | undefined => {
  return token ? `var(--${tokenType}-${token})` : undefined;
};
