import { InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  state?: InputStates;
  inputSize?: InputSize;
}

export type InputStates = 'default';

export type InputSize = 'small' | 'medium' | 'large';
