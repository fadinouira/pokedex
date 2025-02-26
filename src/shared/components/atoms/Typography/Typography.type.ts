import {
  ColorToken,
  FontNameToken,
  FontSizeToken,
  FontWeightToken,
  LetterSpacingToken,
  LineHeightToken,
} from '@/shared/types';
import { ElementType, HTMLAttributes } from 'react';

export interface TypographyProps extends HTMLAttributes<HTMLDivElement> {
  label?: string;
  component?: ElementType;
  color?: ColorToken;
  font?: FontNameToken;
  fontSize?: FontSizeToken;
  fontWeight?: FontWeightToken;
  lineHeight?: LineHeightToken;
  letterSpacing?: LetterSpacingToken;
  uppercase?: boolean;
  capitalize?: boolean;
  capitalizeFirstLetter?: boolean;
  centerText?: boolean;
}
