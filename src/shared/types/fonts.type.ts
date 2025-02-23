import {
  FONT_SIZE_TOKENS,
  FONT_TOKENS,
  FONT_WEIGHT_TOKENS,
  LETTER_SPACING_TOKENS,
  LINE_HEIGHT_TOKENS,
} from '@/config';

export type FontNameToken = (typeof FONT_TOKENS)[number];

export type FontSizeToken = (typeof FONT_SIZE_TOKENS)[number];

export type FontWeightToken = (typeof FONT_WEIGHT_TOKENS)[number];

export type LineHeightToken = (typeof LINE_HEIGHT_TOKENS)[number];

export type LetterSpacingToken = (typeof LETTER_SPACING_TOKENS)[number];

export type FontToken =
  | FontNameToken
  | FontSizeToken
  | FontWeightToken
  | LineHeightToken
  | LetterSpacingToken;

export type FontTokenType = 'font' | 'font-size' | 'font-weight' | 'line-height' | 'letter-spacing';
