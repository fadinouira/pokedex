import { ColorToken } from '@/shared/types';
import { ReactNode } from 'react';

export interface PageContainerProps {
  children: ReactNode;
  className?: string;
  backgroundColor?: ColorToken;
  showBackButton?: boolean;
}
