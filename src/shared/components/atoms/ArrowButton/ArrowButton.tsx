import ArrowIcon from '@/shared/assets/icons/arrow_left.svg?react';
import { generateStyleToken } from '@/shared/utils';
import './ArrowButton.css';
import { ArrowButtonProps } from './ArrowButton.type';

export function ArrowButton({
  direction = 'left',
  color = 'bg-default',
  ...props
}: ArrowButtonProps) {
  return (
    <button
      {...props}
      className={['arrow-button', `arrow-${direction}`, props.className].join(' ')}
    >
      <ArrowIcon width="39px" className="arrow-icon" fill={generateStyleToken('color', color)} />
    </button>
  );
}
