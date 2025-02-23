import { ColorToken } from '@/shared/types';
import { HTMLAttributes } from 'react';

export interface TabsProps extends HTMLAttributes<HTMLDivElement> {
  items: TabItem[];
  defaultActiveIndex?: number;
  size?: TabSize;
  color?: ColorToken;
  foregroundColor?: ColorToken;
  onTabChange?: (index: number) => void;
}

export interface TabItem {
  label: string;
}

export type TabSize = 'small' | 'medium' | 'large';
