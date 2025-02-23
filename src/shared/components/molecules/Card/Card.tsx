import { generateStyleToken } from '@/shared/utils';
import './Card.css';
import { CardProps } from './Card.type';

export function Card({ backgroundColor = 'bg-light', children, ...props }: CardProps) {
  return (
    <div
      {...props}
      className={['card', props.className].join(' ')}
      style={{
        ...props.style,
        backgroundColor: generateStyleToken('color', backgroundColor),
      }}
    >
      {children}
    </div>
  );
}
