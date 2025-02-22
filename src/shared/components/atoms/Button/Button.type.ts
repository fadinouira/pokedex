import { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  label?: string;
}

export type ButtonVariant = 'primary' | 'secondary' | 'danger';
