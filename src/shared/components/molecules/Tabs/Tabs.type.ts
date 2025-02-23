import { ColorToken } from '@/shared/types';
import { HTMLAttributes, ReactNode } from 'react';

export interface TabsProps extends HTMLAttributes<HTMLDivElement> {
  items: TabItem[];
  defaultActiveIndex?: number;
  size?: TabSize;
  color?: ColorToken;
  backgroundColor?: ColorToken;
  onTabChange?: (index: number) => void;
}

export interface TabItem {
  label: string;
  content: ReactNode;
}

export type TabSize = 'small' | 'medium' | 'large';
