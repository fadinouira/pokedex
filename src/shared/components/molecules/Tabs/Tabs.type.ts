import { ColorToken } from '@/shared/types';

export interface TabsProps {
  items: TabItem[];
  activeIndex?: number;
  color?: ColorToken;
  foregroundColor?: ColorToken;
  onTabChange?: (index: number) => void;
}

export interface TabItem {
  label: string;
  path?: string;
}
