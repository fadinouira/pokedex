import { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  label?: string;
}

export type ButtonVariant = 'primary';

export type ButtonSize = 'small' | 'medium' | 'large';
