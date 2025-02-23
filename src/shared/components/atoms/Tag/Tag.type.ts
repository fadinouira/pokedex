import { ColorToken } from '@/shared/types';
import { HTMLAttributes } from 'react';

export interface TagProps extends HTMLAttributes<HTMLDivElement> {
  size?: TagSize;
  label?: string;
  color?: ColorToken;
  backgroundColor?: ColorToken;
}

export type TagSize = 'small' | 'medium' | 'large';
