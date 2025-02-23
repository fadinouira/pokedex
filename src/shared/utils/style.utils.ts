import { ColorToken, FontToken, StyleTokenType } from '../types';

export const generateStyleToken = (
  tokenType: StyleTokenType,
  token?: ColorToken | FontToken,
): string | undefined => {
  return token ? `var(--${tokenType}-${token})` : undefined;
};
