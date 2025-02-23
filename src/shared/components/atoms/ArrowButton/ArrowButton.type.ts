import { ColorToken } from '@/shared/types';
import { HTMLAttributes } from 'react';
import './ArrowButton.css';

export interface ArrowButtonProps extends HTMLAttributes<HTMLButtonElement> {
  direction?: 'left' | 'right' | 'up' | 'down';
  color?: ColorToken;
}
