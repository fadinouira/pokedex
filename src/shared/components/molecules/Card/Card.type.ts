import { ColorToken } from '@/shared/types';
import { HTMLAttributes } from 'react';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  backgroundColor?: ColorToken;
}
