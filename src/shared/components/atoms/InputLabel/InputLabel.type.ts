import { ColorToken } from '@/shared/types';
import { LabelHTMLAttributes } from 'react';

export interface InputLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  label?: string;
  color?: ColorToken;
}
