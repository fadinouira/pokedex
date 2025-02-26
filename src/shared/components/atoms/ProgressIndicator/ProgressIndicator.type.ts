import { ColorToken } from '@/shared/types';

export interface ProgressIndicatorProps {
  value: number;
  max?: number;
  color?: ColorToken;
  className?: string;
}
